---
title: ARIA-Live-Regionen
slug: Web/Accessibility/ARIA/Guides/Live_regions
l10n:
  sourceCommit: 5e815d522e796fb2209fa8470616b37e31c572b4
---

Mit JavaScript ist es möglich, Teile einer Seite dynamisch zu ändern, ohne dass die gesamte Seite neu geladen werden muss – beispielsweise um eine Liste von Suchergebnissen sofort zu aktualisieren oder um einen dezenten Alarm oder eine Benachrichtigung anzuzeigen, die keine Benutzerinteraktion erfordert. Während diese Änderungen für Benutzer, die die Seite sehen können, in der Regel offensichtlich sind, sind sie möglicherweise nicht für Benutzer von unterstützenden Technologien erkennbar. ARIA-Live-Regionen schließen diese Lücke und bieten eine Möglichkeit, dynamische Inhaltsänderungen programmatisch so offenzulegen, dass sie von unterstützenden Technologien angekündigt werden können.

> [!NOTE]
> Unterstützende Technologien kündigen in der Regel nur _dynamische_ Änderungen des Inhalts einer Live-Region an.
> Indem Sie dem zu aktualisierenden Element ein `aria-live`-Attribut oder eine spezialisierte Live-Region-Rolle (wie [`role="status"`](/de/docs/Web/Accessibility/ARIA/Reference/Roles/status_role)) hinzufügen, stellen Sie sicher, dass Änderungen angekündigt werden, solange Sie das Attribut hinzufügen, bevor die Änderungen auftreten - entweder im ursprünglichen Markup oder dynamisch mit JavaScript. Beginnen Sie mit einer leeren Live-Region und ändern Sie dann - in einem separaten Schritt - den Inhalt innerhalb der Region.
> Auch wenn es in der Spezifikation nicht explizit dokumentiert ist, enthalten Browser/unterstützende Technologien eine spezielle Behandlung für [`role="alert"`](/de/docs/Web/Accessibility/ARIA/Reference/Roles/alert_role): In den meisten Fällen wird der Inhalt innerhalb von `role="alert"`-Regionen angekündigt, selbst wenn die Region (die bereits die Benachrichtigung/Mitteilung enthält) im ursprünglichen Markup der Seite vorhanden ist oder dynamisch in die Seite eingefügt wird. Beachten Sie jedoch, dass `role="alert"`-Regionen – abhängig von der spezifischen Browser/unterstützende Technologie-Kombination – beim Angekündigtwerden automatisch mit "Alert" vorangestellt werden.

## Live-Regionen

Dynamische Inhalte, die ohne Neuladen der Seite aktualisiert werden, sind in der Regel entweder eine Region oder ein Widget. Einfache inaktive Inhaltsänderungen sollten als Live-Regionen gekennzeichnet werden. Eine Live-Region wird explizit durch das `aria-live`-Attribut gekennzeichnet.

**`aria-live`**: Das `aria-live=POLITENESS_SETTING` wird verwendet, um die Priorität festzulegen, mit der der Screenreader Updates zu Live-Regionen behandeln soll - die möglichen Einstellungen sind: `off`, `polite` oder `assertive`. Dieses Attribut ist bei weitem das wichtigste.

Normalerweise wird nur `aria-live="polite"` verwendet. Jede Region, die Updates erhält, die für den Benutzer wichtig sind, die aber nicht so schnell sind, dass sie störend wirken, sollte dieses Attribut erhalten. Der Screenreader wird Änderungen ankündigen, wenn der Benutzer nicht aktiv ist.

`aria-live="assertive"` sollte nur für zeitkritische Benachrichtigungen verwendet werden, die unbedingt sofortige Aufmerksamkeit des Benutzers erfordern. Im Allgemeinen wird eine Änderung einer assertiven Live-Region jede Ansage unterbrechen, die ein Screenreader derzeit macht. Daher kann es äußerst störend und ärgerlich sein und sollte nur sparsam eingesetzt werden.

Widersprüchlich ist `aria-live="off"` nicht dazu gedacht, dass Änderungen nicht angekündigt werden sollten. Wenn ein Element `aria-live="off"` hat (oder eine `role` mit diesem impliziten Wert, wie `role="marquee"` oder `role="timer"`), sollen Änderungen des Inhalts des Elements nur angekündigt werden, wenn der Fokus auf dem Element liegt oder sich darin befindet.

### Einfaches Beispiel: Dropdown-Box aktualisiert nützliche Informationen auf dem Bildschirm

Eine Website, die sich auf die Bereitstellung von Informationen über Planeten spezialisiert hat, bietet eine Dropdown-Box. Wenn ein Planet aus dem Dropdown ausgewählt wird, wird auf der Seite eine Region mit Informationen zum ausgewählten Planeten aktualisiert.

```html
<fieldset>
  <legend>Planet information</legend>
  <label for="planetsSelect">Planet:</label>
  <select id="planetsSelect" aria-controls="planetInfo">
    <option value="">Select a planet…</option>
    <option value="mercury">Mercury</option>
    <option value="venus">Venus</option>
    <option value="earth">Earth</option>
    <option value="mars">Mars</option>
  </select>
  <button id="renderPlanetInfoButton">Go</button>
</fieldset>

<div role="region" id="planetInfo" aria-live="polite">
  <h2 id="planetTitle">No planet selected</h2>
  <p id="planetDescription">Select a planet to view its description</p>
</div>

<p>
  <small>
    Information from
    <a href="https://en.wikipedia.org/wiki/Solar_System">Wikipedia</a>
  </small>
</p>
```

```js
const PLANETS_INFO = {
  mercury: {
    title: "Mercury",
    description:
      "Mercury is the smallest and innermost planet in the Solar System. It is named after the Roman deity Mercury, the messenger to the gods.",
  },

  venus: {
    title: "Venus",
    description:
      "Venus is the second planet from the Sun. It is named after the Roman goddess of love and beauty.",
  },

  earth: {
    title: "Earth",
    description:
      "Earth is the third planet from the Sun and the only object in the Universe known to harbor life.",
  },

  mars: {
    title: "Mars",
    description:
      'Mars is the fourth planet from the Sun and the second-smallest planet in the Solar System after Mercury. In English, Mars carries a name of the Roman god of war, and is often referred to as the "Red Planet".',
  },
};

function renderPlanetInfo(planet) {
  const planetTitle = document.querySelector("#planetTitle");
  const planetDescription = document.querySelector("#planetDescription");

  if (planet in PLANETS_INFO) {
    planetTitle.textContent = PLANETS_INFO[planet].title;
    planetDescription.textContent = PLANETS_INFO[planet].description;
  } else {
    planetTitle.textContent = "No planet selected";
    planetDescription.textContent = "Select a planet to view its description";
  }
}

const renderPlanetInfoButton = document.querySelector(
  "#renderPlanetInfoButton",
);

renderPlanetInfoButton.addEventListener("click", (event) => {
  const planetsSelect = document.querySelector("#planetsSelect");
  const selectedPlanet =
    planetsSelect.options[planetsSelect.selectedIndex].value;

  renderPlanetInfo(selectedPlanet);
});
```

{{EmbedLiveSample('Basic_example_Dropdown_box_updates_useful_onscreen_information', '', 350)}}

Wenn der Benutzer einen neuen Planeten auswählt, wird die Information in der Live-Region angekündigt. Da die Live-Region `aria-live="polite"` hat, wird der Screenreader warten, bis der Benutzer eine Pause macht, bevor die Aktualisierung angekündigt wird. Daher wird das Durchgehen der Liste und das Auswählen eines anderen Planeten keine Updates in der Live-Region ankündigen. Updates in der Live-Region werden nur für den schließlich ausgewählten Planeten angekündigt.

Hier ist ein Screenshot von VoiceOver auf einem Mac, das die Aktualisierung (per Untertitel) der Live-Region ankündigt:

![Ein Screenshot von VoiceOver auf einem Mac, das die Aktualisierung einer Live-Region ankündigt. Untertitel sind im Bild zu sehen.](web_accessibility_aria_aria_live_regions.png)

## Rollen mit impliziten Live-Region-Attributen

Elemente mit den folgenden [`role="…"`](/de/docs/Web/Accessibility/ARIA/Reference/Roles) Werten fungieren standardmäßig als Live-Regionen:

<table style="width: 100%;">
 <thead>
  <tr>
   <th scope="col">Rolle</th>
   <th scope="col">Beschreibung</th>
   <th scope="col">Kompatibilitätsnotizen</th>
  </tr>
 </thead>
 <tbody>
  <tr>
   <td>log</td>
   <td>Chat, Fehler, Spiel oder andere Art von Log</td>
   <td>Um die Kompatibilität zu maximieren, fügen Sie ein redundantes <code>aria-live="polite"</code> hinzu, wenn Sie diese Rolle verwenden.</td>
  </tr>
  <tr>
   <td>status</td>
   <td>Eine Statusleiste oder ein Bereich auf dem Bildschirm, der einen aktualisierten Status irgendeiner Art bereitstellt. Screenreader-Benutzer haben einen speziellen Befehl, um den aktuellen Status zu lesen.</td>
   <td>Um die Kompatibilität zu maximieren, fügen Sie ein redundantes <code>aria-live="polite"</code> hinzu, wenn Sie diese Rolle verwenden.</td>
  </tr>
  <tr>
   <td>alert</td>
   <td>Fehler- oder Warnmeldung, die auf dem Bildschirm blinkt. Warnungen sind besonders wichtig für clientseitige Validierungsmitteilungen an Benutzer. <a href="https://www.w3.org/WAI/ARIA/apg/example-index/alert/alert.html" class="external" rel="noopener">Alert-Beispiel.</a></td>
   <td>Um die Kompatibilität zu maximieren, empfehlen manche Leute, ein redundantes <code>aria-live="assertive"</code> hinzuzufügen, wenn Sie diese Rolle verwenden. Allerdings verursachen sowohl <code>aria-live</code> als auch <code>role="alert"</code> Doppelsprechprobleme bei VoiceOver auf iOS.</td>
  </tr>
  <tr>
   <td>progressbar</td>
   <td>Eine Mischung zwischen einem Widget und einer Live-Region. Verwenden Sie dies mit <code>aria-valuemin</code>, <code>aria-valuenow</code> und <code>aria-valuemax</code>. (TBD: Weitere Infos hinzufügen).</td>
   <td></td>
  </tr>
  <tr>
   <td>marquee</td>
   <td>Text, der scrollt, wie ein Aktien-Ticker.</td>
   <td></td>
  </tr>
  <tr>
   <td>timer</td>
   <td>Alle Arten von Timer oder Uhren, wie ein Countdown-Timer oder Stoppuhr-Anzeige.</td>
   <td></td>
  </tr>
 </tbody>
</table>

## Zusätzliche Live-Region-Attribute

Live-Regionen sind gut unterstützt. Vispero hat 2014 [Informationen über den Stand der Unterstützung von Live-Regionen](https://vispero.com/resources/screen-reader-support-aria-live-regions/) veröffentlicht. Paul J. Adam hat [die Unterstützung von `aria-atomic` und `aria-relevant`](https://pauljadam.com/demos/aria-atomic-relevant.html) besonders erforscht.

1. **`aria-atomic`**: Das `aria-atomic=BOOLEAN` wird verwendet, um festzulegen, ob der Screenreader die Live-Region immer als Ganzes präsentieren soll, auch wenn sich nur ein Teil der Region ändert. Die möglichen Einstellungen sind: `false` oder `true`. Die Standardeinstellung ist `false`.
2. [**`aria-relevant`**](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-relevant)

   : Das `aria-relevant=[LIST_OF_CHANGES]` wird verwendet, um festzulegen, welche Arten von Änderungen für eine Live-Region relevant sind. Die möglichen Einstellungen sind eine oder mehrere der folgenden: `additions`, `removals`, `text`, `all`. Die Standardeinstellung ist: `additions text`.

### Grundlegende Beispiele: `aria-atomic`

Zur Veranschaulichung von `aria-atomic`, betrachten Sie eine Seite mit einer einfachen Uhr, die Stunden und Minuten anzeigt. Die Uhr wird jede Minute aktualisiert, wobei die neue verbleibende Zeit den aktuellen Inhalt überschreibt.

```html
<div id="clock" role="timer" aria-live="polite">
  <span id="clock-hours"></span>
  <span id="clock-mins"></span>
</div>
```

```js
/* basic JavaScript to update the clock */
function updateClock() {
  const now = new Date();
  document.getElementById("clock-hours").textContent = now.getHours();
  document.getElementById("clock-mins").textContent =
    `0${now.getMinutes()}`.slice(-2);
}

/* first run */
updateClock();

/* update every minute */
setInterval(updateClock, 60000);
```

Beim ersten Ausführen der Funktion wird die gesamte eingefügte Zeichenkette angekündigt. Bei nachfolgenden Aufrufen werden nur die Teile des Inhalts, die sich im Vergleich zum vorherigen Inhalt geändert haben, angekündigt. Wenn sich die Uhr beispielsweise von "17:33" auf "17:34" ändert, werden unterstützende Technologien nur "34" ansagen, was für Benutzer nicht sehr hilfreich sein wird.

Ein Weg, dies zu umgehen, wäre, zuerst den gesamten Inhalt der Live-Region zu löschen (in diesem Fall den `innerHTML` von sowohl `<span id="clock-hours">` als auch `<span id="clock-mins">` leer zu setzen) und dann den neuen Inhalt einzufügen. Dies kann jedoch manchmal unzuverlässig sein, da es vom genauen Timing dieser beiden Updates abhängt.

`aria-atomic="true"` stellt sicher, dass bei jeder Aktualisierung der Live-Region der gesamte Inhalt vollständig angekündigt wird (z.B. "17:34").

```html
<div id="clock" role="timer" aria-live="polite" aria-atomic="true">…</div>
```

Ein weiteres Beispiel für `aria-atomic` - ein Update/Benachrichtigung als Ergebnis einer Benutzeraktion.

```html
<div id="date-input">
  <label for="year">Year:</label>
  <input type="text" id="year" value="1990" />
</div>

<div id="date-output" aria-atomic="true" aria-live="polite">
  The set year is:
  <span id="year-output">1990</span>
</div>
```

```js
function change(event) {
  const yearOut = document.getElementById("year-output");

  switch (event.target.id) {
    case "year":
      yearOut.textContent = event.target.value;
      break;
  }
}

document.getElementById("year").addEventListener("blur", change);
```

Ohne `aria-atomic="true"` kündigt der Screenreader nur den geänderten Wert des Jahres an. Mit `aria-atomic="true"` kündigt der Screenreader "Das gesetzte Jahr ist: _geänderter Wert_" an.

### Einfaches Beispiel: `aria-relevant`

Mit `aria-relevant` können Sie angeben, welche Arten von Änderungen/Aktualisierungen an einer Live-Region angekündigt werden sollen.

Betrachten Sie als Beispiel eine Chatseite, die eine Liste der derzeit angemeldeten Benutzer anzeigen möchte. Anstatt nur die derzeit angemeldeten Benutzer anzukündigen, möchten wir auch eine Ansage speziell dann auslösen, wenn ein Benutzer _aus_ der Liste entfernt wird. Wir können dies erreichen, indem wir `aria-relevant="additions removals"` angeben.

```html
<ul id="roster" aria-live="polite" aria-relevant="additions removals">
  <!-- use JavaScript to add and remove users here -->
</ul>
```

Aufschlüsselung der ARIA-Live-Eigenschaften:

- `aria-live="polite"` gibt an, dass der Screenreader warten soll, bis der Benutzer nicht mehr aktiv ist, bevor er dem Benutzer Updates präsentiert. Dies ist der am häufigsten verwendete Wert, da das Unterbrechen des Benutzers mit "assertive" den Fluss unterbrechen könnte.
- `aria-atomic` ist nicht gesetzt (`false` standardmäßig), sodass nur die hinzugefügten oder entfernten Benutzer angekündigt werden sollten und nicht jedes Mal die gesamte Liste.
- `aria-relevant="additions removals"` stellt sicher, dass sowohl hinzugefügte als auch entfernte Benutzer aus der Liste angekündigt werden.

## Siehe auch

- [ARIA-Rollen](/de/docs/Web/Accessibility/ARIA/Reference/Roles)
- [`Document.ariaNotify()`](/de/docs/Web/API/Document/ariaNotify), [`Element.ariaNotify()`](/de/docs/Web/API/Element/ariaNotify)
