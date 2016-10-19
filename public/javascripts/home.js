angular.module('myApp')
.component('home', {
  template: `
  <div class="banner-img valign-wrapper">
    <div class="transparent-container valign center">
      <h1 class="main-header">gitFit<h1>
      <h5 class="main-text">The world's greatest fitness goal tracker</h5>
    </div>
  </div>
  <div class="center cta">
    <h3 id="main-header">gitFit is a wonderful app that will allow you to track fitness goals so that you can work towards your better you! Please sign up today!</h3>
  </div>
  <div class="container">
    <div class="row">

      <div class="col s12 m4 l4">
        <i class="material-icons cta-icon">directions_run</i>
        <h5>Create New Goals</h5>
        <p>In this app you can create new goals so that you can begin tracking your progress!</p>
      </div>

      <div class="col s12 m4 l4">
        <i class="material-icons cta-icon">rowing</i>
        <h5>Manage Existing Goals</h5>
        <p>Hey, sometimes things change. That's why we give you the ability to edit your existing goals!</p>
      </div>

      <div class="col s12 m4 l4">
        <i class="material-icons cta-icon">perm_identity</i>
        <h5>Start Your Better Life</h5>
        <p>With this amazingly awesome app, you can start becoming the better you!</p>
      </div>

    </div>
  </div>

  `,
  controller: function(Auth, $state) {
    this.Auth = Auth;
    this.$state = $state;
    this.name = 'gitFit';
    this.demoGoal = { title:  'Demo Running',
                    dateToComplete: '12-25-2016',
                    distance: 5,
                    time: 40,
                    completed: false,
                  };
    this.parallax = function(){
                    console.log('Parallax JQuery init works in home.js');
                    $('.parallax').parallax();
                  };
  }
});

//<section class="container well text-center">
//   <h1>Welcome to the</h1>
  // <h1>{{ $ctrl.name }}</h1>
//..
// </section>


// var GoalSchema = new mongoose.Schema({
//   title:     { type: String,  required: true },
//   dateToComplete: {type: Date, required: true },
//   distance: Number,
//   time: Number,
//   sets: Number,
//   reps: Number,
//   muscleGroup: String,
//   completed: { type: Boolean, required: true },
//   user:      { type: mongoose.Schema.Types.ObjectId, ref: 'User'}
//   },
//   { timestamps: true }  // createdAt, updatedAt
// );
