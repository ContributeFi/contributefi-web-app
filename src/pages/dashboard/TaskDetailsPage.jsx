import BackButton from "@/components/BackButton";
import { getQuests } from "@/services";
import { useQuery } from "@tanstack/react-query";
import { useParams } from "react-router";
import { FaLink, FaUsers } from "react-icons/fa";
import { LuGithub } from "react-icons/lu";
import { RiInstagramFill, RiTwitterXFill } from "react-icons/ri";
import { TASK_TAG_BG } from "@/lib/constants";
import { Button } from "@/components/ui/button";
import TasksCard from "@/components/TasksCard";
import Loader from "@/components/Loader";
import Error from "@/components/Error";
import Empty from "@/components/Empty";

const TAG = ["GROWTH", "ON_CHAIN", "TECHNICAL"];

function TaskDetailsPage() {
  const { taskId } = useParams();

  const LIMIT = 3;

  const {
    data: questData,
    isLoading: loadingQuests,
    isError: errorLoadingQuests,
  } = useQuery({
    queryKey: ["quests", LIMIT],
    queryFn: () => getQuests({ limit: LIMIT }),
    keepPreviousData: true,
  });

  const quests = questData?.data ?? [];

  return (
    <div>
      <div className="space-y-8">
        <div className="md:hidden">
          <BackButton />
        </div>
        <div className="space-y-16 rounded-[4px] bg-white p-4">
          <div className="max-w-[700px] space-y-6">
            <div className="flex items-center justify-between">
              <div className="flex items-start gap-3">
                <img src="/ChartPolar.svg" alt="" />
                <div className="space-y-1">
                  <p className="font-semibold text-[#050215]">
                    {/* {community?.name} */} The Unifier
                  </p>
                  <p className="flex items-center gap-1 text-[14px] text-[#777F90]">
                    <FaUsers />
                    <span className="shrink-0">
                      {/* {community?.numberOfMembers} members */} 64 members
                    </span>
                  </p>
                </div>
              </div>

              <button className="shrink-0 cursor-pointer text-[#2F0FD1]">
                + <span>Join</span>{" "}
                <span className="hidden sm:inline">Community</span>
              </button>
            </div>

            <div className="space-y-8">
              <div className="space-y-6">
                <div>
                  <div className="space-y-4">
                    <h2 className="text-[20px] font-bold text-[#050215]">
                      {taskId}
                    </h2>
                    <div className="flex flex-wrap gap-2">
                      {TAG.map((t, i) => (
                        <div
                          className={`rounded-[4px] px-[12px] py-[5px] text-sm font-normal text-[#313131] ${TASK_TAG_BG[t]}`}
                          key={i}
                        >
                          {t}
                        </div>
                      ))}
                    </div>

                    <div className="flex items-center gap-2">
                      <p className="flex shrink-0 gap-1.5 font-semibold text-[#2F0FD1]">
                        <img src="/Gift.svg" alt="" />
                        {/* {task.amount} XLM */} 80 XLM
                      </p>
                      <div className="flex shrink-0 items-center gap-1">
                        <div className="h-1 w-1 rounded-full bg-[#636366]" />
                        <p className="flex gap-1.5 font-semibold text-[#8791A7]">
                          {/* <img src="/UsersThree.svg" alt="" />{" "} */}
                          {/* {task.numberOfMembers} */}2 hours ago
                        </p>
                      </div>
                    </div>
                  </div>
                </div>

                <p className="font-normal text-[#525866]">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Tempore repudiandae laudantium consequatur labore iure neque
                  cumque quasi provident magnam mollitia quas sapiente
                  cupiditate, qui officiis repellat laboriosam asperiores
                  consequuntur eveniet. Lorem ipsum dolor sit amet consectetur
                  adipisicing elit. Iste deserunt fuga explicabo eligendi
                  corporis earum magni! Minima, laborum quod magnam quas
                  quisquam, provident exercitationem voluptate nihil, explicabo
                  ratione nulla eligendi.
                </p>
              </div>

              <div className="flex flex-wrap items-center justify-between gap-2">
                <div className="flex flex-wrap gap-2">
                  <div className="bg-white p-2">
                    <FaLink className="rounded-[4px] text-[24px] text-[#777F90]" />
                  </div>
                  <div className="bg-white p-2">
                    <RiTwitterXFill className="rounded-[4px] text-[24px] text-[#777F90]" />
                  </div>
                  <div className="bg-white p-2">
                    <RiInstagramFill className="rounded-[4px] text-[24px] text-[#777F90]" />
                  </div>
                  <div className="bg-white p-2">
                    <LuGithub className="rounded-[4px] text-[24px] text-[#777F90]" />
                  </div>
                </div>

                <Button className="cursor-pointer rounded-md bg-[#2F0FD1] px-8 py-5 hover:bg-[#2F0FD1]/70">
                  Claim Task
                </Button>
              </div>
            </div>
          </div>
          <div className="space-y-3">
            <h2 className="text-[20px] font-semibold text-[#050215]">
              Similar Tasks
            </h2>

            {loadingQuests ? (
              <Loader />
            ) : errorLoadingQuests ? (
              <Error title="Failed to load quests..." />
            ) : quests.length === 0 ? (
              <Empty title="No quests found..." />
            ) : (
              <>
                <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-2 xl:grid-cols-3 2xl:grid-cols-4">
                  {quests.slice(0, 3).map((task, i) => (
                    <TasksCard task={task} key={i} />
                  ))}
                </div>
              </>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

export default TaskDetailsPage;
