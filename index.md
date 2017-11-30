---
layout: home
title: Web Developer and SEO Specialist Ryan Videlock
image: 
page_id: '1'
meta_title: Web Developer and SEO Specialist Ryan Videlock
meta_description: 
---
{% capture index %}{% include pages/index.md %}{% endcapture %}
{{ index | markdownify }}


### About me

<img src="" alt="">

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