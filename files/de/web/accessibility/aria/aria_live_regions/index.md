---
title: ARIA Live-Bereiche
slug: Web/Accessibility/ARIA/ARIA_Live_Regions
l10n:
  sourceCommit: 3a004b55441ee5ac51bd34be5f3b7c6ce693ed6d
---

{{AccessibilitySidebar}}

Mithilfe von JavaScript ist es möglich, Teile einer Seite dynamisch zu ändern, ohne dass die gesamte Seite neu geladen werden muss – zum Beispiel, um eine Liste von Suchergebnissen spontan zu aktualisieren oder eine diskrete Warnung oder Benachrichtigung anzuzeigen, die keine Benutzerinteraktion erfordert. Während diese Änderungen für Benutzer, die die Seite sehen können, meist visuell erkennbar sind, sind sie für Nutzer von unterstützenden Technologien möglicherweise nicht offensichtlich. ARIA Live-Bereiche füllen diese Lücke und bieten eine Möglichkeit, dynamische Inhaltsänderungen programmatisch offenzulegen, damit sie von unterstützenden Technologien angekündigt werden können.

> [!NOTE]
> Unterstützende Technologien geben im Allgemeinen nur _dynamische_ Änderungen im Inhalt eines Live-Bereichs bekannt.
> Die Verwendung eines `aria-live`-Attributs oder einer spezialisierten Live-Bereichsrolle (wie [`role="status"`](/de/docs/Web/Accessibility/ARIA/Roles/status_role)) auf dem Element, dessen Änderungen Sie ankündigen möchten, funktioniert, solange Sie das Attribut hinzufügen, bevor die Änderungen auftreten – entweder im ursprünglichen Markup oder dynamisch mit JavaScript. Beginnen Sie mit einem leeren Live-Bereich und ändern Sie dann – in einem separaten Schritt – den Inhalt innerhalb des Bereichs.
> Obwohl dies nicht explizit in der Spezifikation dokumentiert ist, behandeln Browser/unterstützende Technologien [`role="alert"`](/de/docs/Web/Accessibility/ARIA/Roles/alert_role) speziell: In den meisten Fällen wird der Inhalt innerhalb von `role="alert"`-Bereichen angekündigt, selbst wenn der Bereich (der bereits die Benachrichtigung/Nachricht enthält) im ursprünglichen Markup der Seite vorhanden ist oder dynamisch in die Seite eingefügt wird. Beachten Sie jedoch, dass `role="alert"`-Bereiche – je nach spezifischer Browser-/unterstützender Technologie-Kombination – automatisch mit "Achtung" angekündigt werden.

## Live-Bereiche

Dynamische Inhalte, die ohne Neuladen der Seite aktualisiert werden, sind in der Regel entweder ein Bereich oder ein Widget. Einfache Inhaltsänderungen, die nicht interaktiv sind, sollten als Live-Bereiche markiert werden. Ein Live-Bereich wird explizit durch das `aria-live`-Attribut gekennzeichnet.

**`aria-live`**: `aria-live=POLITENESS_SETTING` wird verwendet, um die Priorität festzulegen, mit der Screenreader Aktualisierungen von Live-Bereichen behandeln sollen – die möglichen Einstellungen sind: `off`, `polite` oder `assertive`. Dieses Attribut ist bei weitem das wichtigste.

Normalerweise wird nur `aria-live="polite"` verwendet. Jeder Bereich, der Aktualisierungen erhält, die für den Benutzer wichtig sind, aber nicht so häufig, dass sie lästig sind, sollte dieses Attribut erhalten. Der Screenreader wird Änderungen vorlesen, wenn der Benutzer inaktiv ist.

`aria-live="assertive"` sollte nur für zeitkritische/entscheidende Benachrichtigungen verwendet werden, die unbedingt die sofortige Aufmerksamkeit des Benutzers erfordern. Eine Änderung an einem assertiven Live-Bereich wird in der Regel jede Ankündigung unterbrechen, die ein Screenreader gerade macht. Daher kann es extrem störend und ablenkend sein und sollte nur sparsam eingesetzt werden.

Unintuitiv bedeutet `aria-live="off"` nicht, dass Änderungen nicht angekündigt werden sollten. Wenn ein Element `aria-live="off"` hat (oder eine `role` mit diesem impliziten Wert, wie `role="marquee"` oder `role="timer"`), sollen Änderungen am Inhalt des Elements nur angekündigt werden, wenn der Fokus auf dem Element liegt oder sich darin befindet.

### Einfaches Beispiel: Dropdown-Menü aktualisiert nützliche Bildschirminformationen

Eine Website, die sich auf Informationen über Planeten spezialisiert hat, bietet ein Dropdown-Menü an. Wenn ein Planet aus dem Dropdown-Menü ausgewählt wird, wird ein Bereich auf der Seite mit Informationen über den ausgewählten Planeten aktualisiert.

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

Wenn der Benutzer einen neuen Planeten auswählt, wird die Information im Live-Bereich angekündigt. Da der Live-Bereich `aria-live="polite"` hat, wartet der Screenreader, bis der Benutzer eine Pause macht, bevor die Aktualisierung angekündigt wird. Daher werden beim Durchblättern der Liste und Auswahl eines anderen Planeten keine Aktualisierungen im Live-Bereich angekündigt. Aktualisierungen im Live-Bereich werden nur für den letztendlich ausgewählten Planeten angekündigt.

Hier ist ein Screenshot von VoiceOver auf einem Mac, der die Aktualisierung (über Untertitel) des Live-Bereichs ankündigt:

![Ein Screenshot von VoiceOver auf einem Mac, der die Aktualisierung eines Live-Bereichs ankündigt. Untertitel werden im Bild angezeigt.](web_accessibility_aria_aria_live_regions.png)

## Rollen mit impliziten Live-Bereichs-Attributen

Elemente mit den folgenden [`role="…"`](/de/docs/Web/Accessibility/ARIA/Roles)-Werten funktionieren standardmäßig als Live-Bereiche:

<table style="width: 100%;">
 <thead>
  <tr>
   <th scope="col">Rolle</th>
   <th scope="col">Beschreibung</th>
   <th scope="col">Kompatibilitätshinweise</th>
  </tr>
 </thead>
 <tbody>
  <tr>
   <td>log</td>
   <td>Chat, Fehler, Spiel oder andere Art von Log</td>
   <td>Um maximale Kompatibilität zu gewährleisten, fügen Sie ein redundantes <code>aria-live="polite"</code> hinzu, wenn Sie diese Rolle verwenden.</td>
  </tr>
  <tr>
   <td>status</td>
   <td>Eine Statusleiste oder ein Bildschirmbereich, der eine aktualisierte Statusinformation bereitstellt. Screenreader-Benutzer haben einen speziellen Befehl, um den aktuellen Status zu lesen.</td>
   <td>Um maximale Kompatibilität zu gewährleisten, fügen Sie ein redundantes <code>aria-live="polite"</code> hinzu, wenn Sie diese Rolle verwenden.</td>
  </tr>
  <tr>
   <td>alert</td>
   <td>Fehler- oder Warnmeldung, die auf dem Bildschirm blinkt. Warnungen sind besonders wichtig für Client-seitige Validierungshinweise an Benutzer. <a href="https://www.w3.org/WAI/ARIA/apg/example-index/alert/alert.html" class="external" rel="noopener">Beispiel für eine Warnung.</a></td>
   <td>Um maximale Kompatibilität zu gewährleisten, empfehlen einige Leute, ein redundantes <code>aria-live="assertive"</code> hinzuzufügen, wenn Sie diese Rolle verwenden. Allerdings verursacht das Hinzufügen von sowohl <code>aria-live</code> als auch <code>role="alert"</code> doppelte Sprachprobleme in VoiceOver auf iOS.</td>
  </tr>
  <tr>
   <td>progressbar</td>
   <td>Eine Mischung zwischen einem Widget und einem Live-Bereich. Verwenden Sie dies mit <code>aria-valuemin</code>, <code>aria-valuenow</code> und <code>aria-valuemax</code>. (TBD: Weitere Informationen hinzufügen).</td>
   <td></td>
  </tr>
  <tr>
   <td>marquee</td>
   <td>Text, der scrollt, wie ein Börsenticker.</td>
   <td></td>
  </tr>
  <tr>
   <td>timer</td>
   <td>Jede Art von Timer oder Uhr, wie ein Countdown-Timer oder eine Stoppuhr-Anzeige.</td>
   <td></td>
  </tr>
 </tbody>
</table>

## Zusätzliche Live-Bereichs-Attribute

Live-Bereiche sind gut unterstützt. Die Paciello-Gruppe veröffentlichte im Jahr 2014 [Informationen über den Stand der Unterstützung von Live-Bereichen](https://www.tpgi.com/screen-reader-support-aria-live-regions/). Paul J. Adam hat [die Unterstützung von `aria-atomic` und `aria-relevant`](https://pauljadam.com/demos/aria-atomic-relevant.html) insbesondere untersucht.

1. **`aria-atomic`**: `aria-atomic=BOOLEAN` wird verwendet, um festzulegen, ob der Screenreader den Live-Bereich immer als Ganzes präsentieren soll, selbst wenn sich nur ein Teil des Bereichs ändert. Die möglichen Einstellungen sind: `false` oder `true`. Die Standardeinstellung ist `false`.
2. [**`aria-relevant`**](/de/docs/Web/Accessibility/ARIA/Attributes/aria-relevant)

   : `aria-relevant=[LIST_OF_CHANGES]` wird verwendet, um festzulegen, welche Arten von Änderungen für einen Live-Bereich relevant sind. Die möglichen Einstellungen sind eine oder mehrere der folgenden: `additions`, `removals`, `text`, `all`. Die Standardeinstellung ist: `additions text`.

### Grundlegende Beispiele: `aria-atomic`

Zur Veranschaulichung von `aria-atomic`, betrachten wir eine Website mit einer einfachen Uhr, die Stunden und Minuten anzeigt. Die Uhr wird jede Minute aktualisiert, wobei die neue verbleibende Zeit den aktuellen Inhalt überschreibt.

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
    `0${now.getMinutes()}`.substr(-2);
}

/* first run */
updateClock();

/* update every minute */
setInterval(updateClock, 60000);
```

Das erste Mal, wenn die Funktion ausgeführt wird, wird die gesamte hinzugefügte Zeichenkette angekündigt. Bei nachfolgenden Aufrufen werden nur die Teile des Inhalts, die sich gegenüber dem vorherigen Inhalt geändert haben, angekündigt. Wenn sich die Uhr beispielsweise von "17:33" auf "17:34" ändert, werden unterstützende Technologien nur "34" ankündigen, was für Benutzer nicht sehr nützlich sein wird.

Ein Weg, dies zu umgehen, wäre, zunächst alle Inhalte des Live-Bereichs zu leeren (in diesem Fall `innerHTML` sowohl für `<span id="clock-hours">` als auch für `<span id="clock-mins">` auf leer zu setzen) und dann den neuen Inhalt einzufügen. Dies kann jedoch manchmal unzuverlässig sein, da es von der genauen zeitlichen Abstimmung dieser beiden Aktualisierungen abhängt.

`aria-atomic="true"` stellt sicher, dass jedes Mal, wenn der Live-Bereich aktualisiert wird, der gesamte Inhalt vollständig angekündigt wird (z. B. "17:34").

```html
<div id="clock" role="timer" aria-live="polite" aria-atomic="true">…</div>
```

Ein weiteres Beispiel für `aria-atomic` - eine Aktualisierung/Benachrichtigung, die als Ergebnis einer Benutzeraktion erfolgt.

```html
<div id="date-input">
  <label for="year">Year:</label>
  <input type="text" id="year" value="1990" onblur="change(event)" />
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
    default:
      return;
  }
}
```

Ohne `aria-atomic="true"` kündigt der Screenreader nur den geänderten Wert des Jahres an. Mit `aria-atomic="true"` kündigt der Screenreader "Das eingestellte Jahr ist: _geänderter Wert_" an.

### Einfaches Beispiel: `aria-relevant`

Mit `aria-relevant` können Sie festlegen, welche Arten von Änderungen/Aktualisierungen an einem Live-Bereich angekündigt werden sollen.

Betrachten wir als Beispiel eine Chat-Site, die eine Liste von derzeit angemeldeten Benutzern anzeigen möchte. Statt nur die derzeit angemeldeten Benutzer anzukündigen, möchten wir auch eine Ankündigung auslösen, wenn ein Benutzer _aus_ der Liste entfernt wird. Dies können wir erreichen, indem wir `aria-relevant="additions removals"` spezifizieren.

```html
<ul id="roster" aria-live="polite" aria-relevant="additions removals">
  <!-- use JavaScript to add and remove users here -->
</ul>
```

Aufschlüsselung der ARIA Live-Eigenschaften:

- `aria-live="polite"` zeigt an, dass der Screenreader warten soll, bis der Benutzer inaktiv ist, bevor er Updates präsentiert. Dies ist der am häufigsten verwendete Wert, da das Unterbrechen des Benutzers mit "assertive" deren Arbeitsfluss stören könnte.
- `aria-atomic` ist nicht gesetzt (`false` standardmäßig), sodass nur die hinzugefügten oder entfernten Benutzer angesagt werden und nicht das gesamte Verzeichnis jedes Mal.
- `aria-relevant="additions removals"` stellt sicher, dass sowohl hinzugefügte als auch entfernte Benutzer im Verzeichnis angesagt werden.

## Siehe auch

- [ARIA Rollen](/de/docs/Web/Accessibility/ARIA/Roles)
