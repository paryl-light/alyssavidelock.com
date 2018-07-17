---
layout: home
title: Web Developer and SEO Specialist Alyssa Videlock
image: 
page_id: '1'
meta_title: Web and Software Developer Alyssa Videlock
meta_description: My name is Alyssa Videlock and I have a background in Web and Software Development.
---
{% capture index %}{% include pages/index.md %}{% endcapture %}
{{ index | markdownify }}


### About me

<div class="row about-me">
    <div class="col-lg-6">
        <img class="img-fluid" src="/assets/img/me.jpg" alt="Web Developer for hire" title="Full stack web developer and seo specialist">
    </div>
    <div class="col-lg-6">
        This is me, web and software developer, Alyssa Videlock! I've worked a small litany of jobs throught my career, with many different people. I work well with both small and large teams, adjusting my attitude and schedule to best suit the needs of the group as a whole. Not only do I enjoy working on problems presented to me, but overcoming them is the best feeling ever. I also have some experience with SEO.<br /><br />
        I love the idea of learning new things and meeting new people. I make friends quickly and pick up on things even faster. I make sure to put all of my attention towards the task at hand and not stop until the project is completed to it's best.<br /><br />
        I have also worked on many different projects; some of which are shown below. I come from a diverse work background; family-owned businesses and small companies alike. In these work places I had to learn many different positions, like front and back end developement, SEO manager, web designer and even data manager. All of these positions have given me a unique perspective on the world of development and allow me to overcome obstacles in completely different ways.<br /><br />
        <a href="/assets/files/resume.pdf" target="_blank">If you need any more information, you can check out my resume!</a>
    </div>
</div>

### Project Showcase

<div class="projects-container">
    <ul class="projects">
{% assign projects = site.data.projects  %}
{% for project in projects %}
        <li class="project-{{project.id}} project">
            <a href="{{project.link}}" target="_blank">
                <h4 class="project-title">{{project.name}}</h4>
                <span class="project-description">
                    <span>
                        {{project.description}}
                        <img src="/assets/img/{{project.image}}" alt="{{project.alt}}" title="{{project.title}}" />
                    </span>
                </span>
            </a>
        </li>
{%endfor%}
    </ul>
</div>

### Work and College Experience

<div class="work-experience-container">
    <ul class="experiences">
{% assign experiences = site.data.workexperience  %}
{% for experience in experiences %}
        <li class="experience-{{experience.id}} experience card">
            <a href="{{experience.url}}" target="_blank">
                <h4 class="experience-title card-front">
                    <span>{{experience.name}}</span>
                </h4>
                <div class="experience-description card-back">
                    <span>{{experience.description}}</span>
                </div>
            </a>
        </li>
{%endfor%}
    </ul>
</div>


### My Skills

<div class="skills">
    <ul class="general-skills">
{% assign j = 0 %}
{% assign generalSkills = site.data.skills | where, "category", "general"  %}
{% for skill in generalSkills %}
{% assign j = j | plus: 1 %}
    <li class="general-skill-{{ j }} skill">
        <h4 class="skill-title">{{skill.name}}</h4>
        <div class="skill-stars">
            {% for counter in (1..skill.level) %}
                <span>★</span>
            {% endfor %}
            {% assign leftoverSkill = 5 | minus: skill.level %}
            {% for counter in (1..leftoverSkill) %}
                <span>☆</span>
            {% endfor %}
        </div>
        <span class="skill-description"><span>{{skill.description}}</span></span>
    </li>
{%endfor%}
</ul>
    <ul class="webDevelopment-skills">
{% assign j = 0 %}
{% assign webDevelopment = site.data.skills | where, "category", "webDevelopment"  %}
{% for skill in webDevelopment %}
{% assign j = j | plus: 1 %}
    <li class="webDevelopment-skill-{{ j }} skill" role="progressbar" aria-valuenow="75" aria-valuemin="0" aria-valuemax="100" >
        <h4 class="skill-title">{{skill.name}}</h4>
        <div class="skill-stars">
            {% for counter in (1..skill.level) %}
                <span>★</span>
            {% endfor %}
            {% assign leftoverSkill = 5 | minus: skill.level %}
            {% for counter in (1..leftoverSkill) %}
                <span>☆</span>
            {% endfor %}
        </div>
        <span class="skill-description"><span>{{skill.description}}</span></span>
    </li>
{%endfor%}
</ul>
<ul class="operatingSystem-skills">
{% assign j = 0 %}
{% assign operatingSystem = site.data.skills | where, "category", "operatingSystem"  %}
{% for skill in operatingSystem %}
{% assign j = j | plus: 1 %}
    <li class="operatingSystem-skill-{{ j }} skill">
        <h4 class="skill-title">{{skill.name}}</h4>
        <div class="skill-stars">
            {% for counter in (1..skill.level) %}
                <span>★</span>
            {% endfor %}
            {% assign leftoverSkill = 5 | minus: skill.level %}
            {% for counter in (1..leftoverSkill) %}
                <span>☆</span>
            {% endfor %}
        </div>
        <span class="skill-description"><span>{{skill.description}}</span></span>
    </li>
{% endfor %}
</ul>
<ul class="developmentSoftware-skills">
{% assign j = 0 %}
{% assign developmentSoftware = site.data.skills | where, "category", "developmentSoftware"  %}
{% for skill in developmentSoftware %}
{% assign j = j | plus: 1 %}
    <li class="developmentSoftware-skill-{{ j }} skill">
        <h4 class="skill-title">{{skill.name}}</h4>
        <div class="skill-stars">
            {% for counter in (1..skill.level) %}
                <span>★</span>
            {% endfor %}
            {% assign leftoverSkill = 5 | minus: skill.level %}
            {% for counter in (1..leftoverSkill) %}
                <span>☆</span>
            {% endfor %}
        </div>
        <span class="skill-description"><span>{{skill.description}}</span></span>
    </li>
{% endfor %}
</ul>
</div>


### Contact me!

<div class="contact-form">
    <form class="gform contactForm" method="POST" action="https://script.google.com/macros/s/AKfycbz9labZ5GHDpMZmWKo8K1hSbtoKc59UuYR40gij9PFuiTCP4js/exec" data-email="alyssa.videlock@gmail.com">
        <div style="display: none;" class="thankyou_message">
            <h2>
                <em>Thank you!</em> I will contact you as soon as possible!
            </h2>
        </div>
        <fieldset class="form-group">
            <label for="username_b">Name</label>
            <input class="form-control" id="username_b" name="username" placeholder="First and Last Name" />
        </fieldset>
        <fieldset class="form-group">
            <label for="email_b">Email</label>
            <input class="form-control" id="email_b" required name="email" placeholder="example@example.com" />
        </fieldset>
        <fieldset class="form-group color">
            <label for="color_b">Color</label>
            <input class="form-control" id="color_b" name="color" placeholder="Favorite Color" />
        </fieldset>
        <fieldset class="form-group full-width">
            <label for="message">Message</label>
            <textarea id="message" class="form-control" name="message"></textarea>
        </fieldset>
        <button type="submit" class="btn btn-primary button-success">Submit</button>
    </form>
</div>