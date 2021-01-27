import './schedule.css'

function Schedule() {
  return (<div className="schedual">
	<div className="schedual_title">Розклад</div>
	<div className="schedual_block_wrapper">
	  {["Понеділок", "Вівторок", "Середа", "Четвер", "П'ятниця"].map((el, i) => <ScheduleBlock key={i} dayName={el}/>)}

	</div>
  </div>)
}

function ScheduleBlock({dayName}) {
  return (<div className="schedual_block">
	<div className="schedual_block_title">
	  <div className="schedual_block_title_wrapper">
		{dayName}
		<div className="schedual_block_title_undeline"></div>
	  </div>
	  <div className="schedual_day">21 Листопада</div>
	</div>
	<div className="schedual_block_info">
	  <div className="schedual_list">
		{/*{% for x in schedule_monday%}*/}
		<div className="schedual_list_item_block">
		  {/*<div className="item_time">{{x.time}}</div>*/}
		  <div className="schedual_list_items">
			<div className="schedual_list_item">
			  <div className="item_wrapper">
				<div className="item_wrapper_info">
				  <div className="left-line"></div>
				  {/*<div className="subject">{{x.lesson_id}}</div>*/}
				</div>
				<div className="additional_info">
				  <div className="">Викладач: Оренчук</div>
				  <div className="">Посилання:<a
					  href="https://meet.google.com/nbh-gnci-xnm?pli=1&authuser=2">Click!</a></div>
				  <div className="">Дод. інформація: Контрольна робота</div>
				</div>
			  </div>
			</div>
		  </div>
		</div>
		{/*{% endfor %}*/}
	  </div>
	</div>
  </div>)
}

export default Schedule