---
title: ARIA Live-Bereiche
slug: Web/Accessibility/ARIA/Guides/Live_regions
l10n:
  sourceCommit: 8941e7636bfc91985ca5a486e7228b681e1aa272
---

Mit JavaScript ist es möglich, Teile einer Seite dynamisch zu ändern, ohne dass die gesamte Seite neu geladen werden muss – zum Beispiel, um eine Liste von Suchergebnissen dynamisch zu aktualisieren oder eine dezente Warnung oder Benachrichtigung anzuzeigen, die keine Benutzerinteraktion erfordert. Während diese Änderungen in der Regel für Benutzer sichtbar sind, die die Seite sehen können, sind sie möglicherweise für Benutzer von unterstützenden Technologien nicht offensichtlich. ARIA Live-Bereiche füllen diese Lücke und bieten eine Möglichkeit, dynamische Inhaltsänderungen so zu programmieren, dass sie von unterstützenden Technologien angekündigt werden können.

> [!NOTE]
> Unterstützende Technologien kündigen generell nur _dynamische_ Änderungen im Inhalt eines Live-Bereichs an.
> Das Hinzufügen eines `aria-live`-Attributes oder einer spezialisierten Live-Bereichsrolle (wie [`role="status"`](/de/docs/Web/Accessibility/ARIA/Reference/Roles/status_role)) zu dem Element, für das Sie Änderungen ankündigen möchten, funktioniert, solange Sie das Attribut hinzufügen, bevor die Änderungen erfolgen – entweder im ursprünglichen Markup oder dynamisch mit JavaScript. Beginnen Sie mit einem leeren Live-Bereich und ändern Sie dann – in einem separaten Schritt – den Inhalt innerhalb des Bereichs.
> Obwohl es nicht explizit in der Spezifikation dokumentiert ist, beinhalten Browser/unterstützende Technologien eine spezielle Behandlung für [`role="alert"`](/de/docs/Web/Accessibility/ARIA/Reference/Roles/alert_role): In den meisten Fällen wird der Inhalt innerhalb von `role="alert"`-Bereichen angekündigt, auch wenn der Bereich (der bereits die Benachrichtigung/Nachricht enthält) im ursprünglichen Markup der Seite vorhanden ist oder dynamisch in die Seite eingefügt wird. Beachten Sie jedoch, dass `role="alert"`-Bereiche – je nach spezifischer Browser/unterstützende Technologie-Kombination – automatisch mit "Alert" angekündigt werden, wenn sie angekündigt werden.

## Live-Bereiche

Dynamische Inhalte, die aktualisiert werden, ohne dass die Seite neu geladen wird, sind in der Regel entweder ein Bereich oder ein Widget. Einfache Inhaltsänderungen, die nicht interaktiv sind, sollten als Live-Bereiche markiert werden. Ein Live-Bereich wird explizit mit dem `aria-live`-Attribut gekennzeichnet.

**`aria-live`**: Das `aria-live=POLITENESS_SETTING` wird verwendet, um die Priorität festzulegen, mit der der Screenreader Updates für Live-Bereiche behandeln soll – die möglichen Einstellungen sind: `off`, `polite` oder `assertive`. Dieses Attribut ist bei weitem das wichtigste.

Normalerweise wird nur `aria-live="polite"` verwendet. Jeder Bereich, der Updates erhält, die für den Benutzer wichtig sind, aber nicht so häufig sind, dass sie störend werden, sollte dieses Attribut erhalten. Der Screenreader wird Änderungen ankündigen, wann immer der Benutzer inaktiv ist.

`aria-live="assertive"` sollte nur für zeitkritische Benachrichtigungen verwendet werden, die die sofortige Aufmerksamkeit des Benutzers erfordern. Im Allgemeinen wird eine Änderung an einem aggressiven Live-Bereich jede Ankündigung unterbrechen, die ein Screenreader derzeit macht. Daher kann es extrem störend sein und sollte nur sparsam verwendet werden.

Unintuitiv weist `aria-live="off"` nicht darauf hin, dass Änderungen nicht angekündigt werden sollen. Wenn ein Element `aria-live="off"` hat (oder eine `role` mit diesem impliziten Wert hat, wie `role="marquee"` oder `role="timer"`), sollen Änderungen am Inhalt des Elements nur angekündigt werden, wenn der Fokus auf oder innerhalb des Elements liegt.

### Einfaches Beispiel: Dropdown-Box aktualisiert nützliche Bildschirminformationen

Eine Website, die sich auf Informationen über Planeten spezialisiert hat, bietet eine Dropdown-Box an. Wenn ein Planet aus dem Dropdown-Menü ausgewählt wird, wird ein Bereich auf der Seite mit Informationen über den ausgewählten Planeten aktualisiert.

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

Wenn der Benutzer einen neuen Planeten auswählt, werden die Informationen im Live-Bereich angekündigt. Da der Live-Bereich `aria-live="polite"` hat, wartet der Screenreader, bis der Benutzer eine Pause macht, bevor er das Update ankündigt. Daher werden beim Bewegen in der Liste und beim Auswählen eines anderen Planeten keine Updates im Live-Bereich angekündigt. Aktualisierungen im Live-Bereich werden nur für den letztendlich ausgewählten Planeten angekündigt.

Hier ist ein Screenshot von VoiceOver auf dem Mac, der das Update (über Untertitel) im Live-Bereich ankündigt:

![Ein Screenshot von VoiceOver auf dem Mac, das das Update in einem Live-Bereich ankündigt. Im Bild werden Untertitel angezeigt.](web_accessibility_aria_aria_live_regions.png)

## Rollen mit impliziten Live-Bereich-Attributen

Elemente mit den folgenden [`role="…"`](/de/docs/Web/Accessibility/ARIA/Reference/Roles)-Werten wirken standardmäßig als Live-Bereiche:

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
   <td>Chat, Fehler, Spiel oder andere Protokollarten</td>
   <td>Um die Kompatibilität zu maximieren, fügen Sie ein redundantes <code>aria-live="polite"</code> hinzu, wenn Sie diese Rolle verwenden.</td>
  </tr>
  <tr>
   <td>status</td>
   <td>Eine Statusleiste oder ein Bereich des Bildschirms, der einen aktualisierten Status bereitstellt. Screenreader-Benutzer haben einen speziellen Befehl, um den aktuellen Status zu lesen.</td>
   <td>Um die Kompatibilität zu maximieren, fügen Sie ein redundantes <code>aria-live="polite"</code> hinzu, wenn Sie diese Rolle verwenden.</td>
  </tr>
  <tr>
   <td>alert</td>
   <td>Fehler- oder Warnmeldung, die auf dem Bildschirm blinkt. Warnungen sind besonders wichtig für clientseitige Validierungshinweise an Benutzer. <a href="https://www.w3.org/WAI/ARIA/apg/example-index/alert/alert.html" class="external" rel="noopener">Warnungsbeispiel.</a></td>
   <td>Um die Kompatibilität zu maximieren, empfehlen einige Personen, ein redundantes <code>aria-live="assertive"</code> hinzuzufügen, wenn Sie diese Rolle verwenden. Das Hinzufügen von sowohl <code>aria-live</code> als auch <code>role="alert"</code> verursacht jedoch Probleme mit doppelter Ansprache in VoiceOver auf iOS.</td>
  </tr>
  <tr>
   <td>progressbar</td>
   <td>Ein Hybrid zwischen einem Widget und einem Live-Bereich. Verwenden Sie dies mit <code>aria-valuemin</code>, <code>aria-valuenow</code> und <code>aria-valuemax</code>. (TBD: Weitere Informationen hier hinzufügen).</td>
   <td></td>
  </tr>
  <tr>
   <td>marquee</td>
   <td>Text, der scrollt, wie ein Börsenticker.</td>
   <td></td>
  </tr>
  <tr>
   <td>timer</td>
   <td>Jede Art von Timer oder Uhr, wie ein Countdown-Timer oder Stoppuhr-Ausgabe.</td>
   <td></td>
  </tr>
 </tbody>
</table>

## Zusätzliche Live-Bereich-Attribute

Live-Bereiche sind gut unterstützt. Die Paciello Group hat im Jahr 2014 [Informationen über den Stand der Unterstützung für Live-Bereiche veröffentlicht](https://www.tpgi.com/screen-reader-support-aria-live-regions/). Paul J. Adam hat [die Unterstützung von `aria-atomic` und `aria-relevant`](https://pauljadam.com/demos/aria-atomic-relevant.html) insbesondere untersucht.

1. **`aria-atomic`**: Das `aria-atomic=BOOLEAN` wird verwendet, um festzulegen, ob der Screenreader den Live-Bereich immer als Ganzes präsentieren soll, auch wenn sich nur ein Teil des Bereichs ändert. Die möglichen Einstellungen sind: `false` oder `true`. Die Standardeinstellung ist `false`.
2. [**`aria-relevant`**](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-relevant)

   : Das `aria-relevant=[LIST_OF_CHANGES]` wird verwendet, um festzulegen, welche Arten von Änderungen für einen Live-Bereich relevant sind. Die möglichen Einstellungen sind eine oder mehrere von: `additions`, `removals`, `text`, `all`. Die Standardeinstellung ist: `additions text`.

### Einfache Beispiele: `aria-atomic`

Zur Veranschaulichung von `aria-atomic` betrachten Sie eine Site mit einer einfachen Uhr, die Stunden und Minuten anzeigt. Die Uhr wird jede Minute aktualisiert, wobei die neue verbleibende Zeit den aktuellen Inhalt überschreibt.

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

Das erste Mal, wenn die Funktion ausgeführt wird, wird der gesamte hinzugefügte String angekündigt. Bei nachfolgenden Aufrufen werden nur die Teile des Inhalts angekündigt, die sich gegenüber dem vorherigen Inhalt geändert haben. Beispielsweise, wenn die Uhr von "17:33" auf "17:34" wechselt, wird von unterstützenden Technologien nur "34" angekündigt, was für Benutzer nicht sehr nützlich sein wird.

Ein Weg, dies zu umgehen, wäre, zunächst den gesamten Inhalt des Live-Bereichs zu löschen (in diesem Fall das `innerHTML` von sowohl `<span id="clock-hours">` als auch `<span id="clock-mins">` leer zu setzen), und dann den neuen Inhalt einzufügen. Dies kann jedoch manchmal unzuverlässig sein, da es von der genauen Zeitplanung dieser beiden Updates abhängt.

`aria-atomic="true"` stellt sicher, dass jedes Mal, wenn der Live-Bereich aktualisiert wird, der gesamte Inhalt vollständig angekündigt wird (z.B. "17:34").

```html
<div id="clock" role="timer" aria-live="polite" aria-atomic="true">…</div>
```

Ein weiteres Beispiel für `aria-atomic`: Eine Aktualisierung/Benachrichtigung, die als Ergebnis einer Benutzeraktion durchgeführt wird.

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

Als Beispiel betrachten Sie eine Chat-Seite, die eine Liste der derzeit angemeldeten Benutzer anzeigen möchte. Anstatt nur die derzeit angemeldeten Benutzer anzukündigen, möchten wir auch eine Ankündigung auslösen, wenn ein Benutzer _aus_ der Liste entfernt wird. Dies können wir erreichen, indem wir `aria-relevant="additions removals"` spezifizieren.

```html
<ul id="roster" aria-live="polite" aria-relevant="additions removals">
  <!-- use JavaScript to add and remove users here -->
</ul>
```

Aufschlüsselung der ARIA-Live-Eigenschaften:

- `aria-live="polite"` zeigt an, dass der Screenreader warten soll, bis der Benutzer inaktiv ist, bevor er Updates präsentiert. Dies ist der am häufigsten verwendete Wert, da das Unterbrechen des Benutzers mit "assertive" deren Workflow unterbrechen könnte.
- `aria-atomic` ist nicht gesetzt (`false` standardmäßig), sodass nur die hinzugefügten oder entfernten Benutzer gesprochen werden und nicht die gesamte Liste jedes Mal.
- `aria-relevant="additions removals"` stellt sicher, dass sowohl hinzugefügte als auch entfernte Benutzer in der Liste gesprochen werden.

## Siehe auch

- [ARIA-Rollen](/de/docs/Web/Accessibility/ARIA/Reference/Roles)
