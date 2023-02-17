import FirstGoal from './FirstGoal';
import SecondGoal from './SecondGoal';
import ThirdGoal from './ThirdGoal';
import GoalItem from './GoalItem';

function GoalList() {
  return (
    <ul>
      <FirstGoal />
      <SecondGoal />
      <ThirdGoal />
      <GoalItem title="Read Consistently" desc="I want to sure I keep reading on time and don't get to behind."/>
      <GoalItem title="Reseach and Read" desc="There are a lot of terms and concepts mentioned that I am not familiar with. I should make it a habit of researching new terms and concepts as I read to get an understanding of what I am reading."/>
      <GoalItem title="Take Notes" desc="I should take notes of important information that I need to remember and make note of for future use."/>
    </ul> );
}
export default GoalList;