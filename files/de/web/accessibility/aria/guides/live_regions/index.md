---
title: ARIA Live-Bereiche
slug: Web/Accessibility/ARIA/Guides/Live_regions
l10n:
  sourceCommit: 93e3c303704c560ce28cc7764ff0069e67c48e79
---

Mit JavaScript ist es möglich, Teile einer Seite dynamisch zu ändern, ohne dass die gesamte Seite neu geladen werden muss – beispielsweise um eine Liste von Suchergebnissen in Echtzeit zu aktualisieren oder um diskrete Warnungen oder Benachrichtigungen anzuzeigen, die keine Benutzerinteraktion erfordern. Während diese Änderungen für Benutzer, die die Seite sehen können, normalerweise sichtbar sind, sind sie für Benutzer assistiver Technologien möglicherweise nicht offensichtlich. ARIA Live-Bereiche füllen diese Lücke und bieten eine Möglichkeit, dynamische Inhaltsänderungen so programmatisch offenzulegen, dass sie von assistiven Technologien angekündigt werden können.

> [!NOTE]
> Assistive Technologien geben in der Regel nur _dynamische_ Änderungen im Inhalt eines Live-Bereichs bekannt.
> Das Einschließen eines `aria-live`-Attributs oder einer spezialisierten Live-Bereichsrolle (wie [`role="status"`](/de/docs/Web/Accessibility/ARIA/Reference/Roles/status_role)) auf dem Element, das Sie ankündigen möchten, funktioniert, solange Sie das Attribut hinzufügen, bevor die Änderungen eintreten – entweder im ursprünglichen Markup oder dynamisch mit JavaScript. Beginnen Sie mit einem leeren Live-Bereich und ändern Sie dann in einem separaten Schritt den Inhalt innerhalb des Bereichs.
> Obwohl nicht ausdrücklich in der Spezifikation dokumentiert, beinhalten Browser/assistive Technologien eine spezielle Behandlung für [`role="alert"`](/de/docs/Web/Accessibility/ARIA/Reference/Roles/alert_role): In den meisten Fällen wird der Inhalt innerhalb von `role="alert"`-Bereichen angekündigt, selbst wenn der Bereich (der bereits die Benachrichtigung/Nachricht enthält) im ursprünglichen Markup der Seite vorhanden ist oder dynamisch in die Seite eingefügt wird. Beachten Sie jedoch, dass `role="alert"`-Bereiche – je nach spezifischer Browser/assistive Technologie-Kombination – automatisch mit "Alert" vorangestellt werden, wenn sie angekündigt werden.

## Live-Bereiche

Dynamische Inhalte, die ohne Seitenneuladen aktualisiert werden, sind im Allgemeinen entweder ein Bereich oder ein Widget. Einfache Inhaltsänderungen, die nicht interaktiv sind, sollten als Live-Bereiche markiert werden. Ein Live-Bereich wird explizit durch das `aria-live`-Attribut gekennzeichnet.

**`aria-live`**: Das `aria-live=POLITENESS_SETTING` wird verwendet, um die Priorität festzulegen, mit der ein Screenreader Updates von Live-Bereichen behandeln soll – die möglichen Einstellungen sind: `off`, `polite` oder `assertive`. Dieses Attribut ist bei weitem das wichtigste.

Normalerweise wird nur `aria-live="polite"` verwendet. Jeder Bereich, der Updates erhält, die für den Benutzer wichtig sind, aber nicht so schnell, dass sie störend wirken, sollte dieses Attribut erhalten. Der Screenreader spricht Änderungen, wann immer der Benutzer inaktiv ist.

`aria-live="assertive"` sollte nur für zeitkritische Benachrichtigungen verwendet werden, die unbedingt die sofortige Aufmerksamkeit des Benutzers erfordern. Im Allgemeinen unterbricht eine Änderung in einem assertiven Live-Bereich jede Ankündigung, die ein Screenreader gerade macht. Daher kann es äußerst störend und aufdringlich sein und sollte nur sparsam verwendet werden.

Unintuitiv deutet `aria-live="off"` nicht darauf hin, dass Änderungen nicht angekündigt werden sollten. Wenn ein Element `aria-live="off"` hat (oder eine Rolle mit diesem impliziten Wert, wie `role="marquee"` oder `role="timer"`), sollen Änderungen am Inhalt des Elements nur dann angekündigt werden, wenn der Fokus auf dem Element liegt oder sich innerhalb des Elements befindet.

### Einfaches Beispiel: Dropdown-Box aktualisiert nützliche Bildschirminformationen

Eine Website, die sich auf Informationen über Planeten spezialisiert hat, bietet eine Dropdown-Box. Wenn ein Planet aus der Dropdown-Liste ausgewählt wird, wird ein Bereich auf der Seite mit Informationen über den ausgewählten Planeten aktualisiert.

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

Wenn der Benutzer einen neuen Planeten auswählt, werden die Informationen im Live-Bereich bekannt gegeben. Da der Live-Bereich `aria-live="polite"` hat, wartet der Screenreader, bis der Benutzer eine Pause einlegt, bevor er das Update ankündigt. Somit wird beim Herunterscrollen in der Liste und der Auswahl eines anderen Planeten kein Update im Live-Bereich angekündigt. Updates im Live-Bereich werden nur für den schließlich ausgewählten Planeten bekannt gegeben.

Hier ist ein Screenshot von VoiceOver auf Mac, der das Update im Live-Bereich (über Untertitel) ankündigt:

![Ein Screenshot von VoiceOver auf Mac, der das Update in einem Live-Bereich ankündigt. Untertitel werden im Bild gezeigt.](web_accessibility_aria_aria_live_regions.png)

## Rollen mit impliziten Live-Bereichs-Attributen

Elemente mit folgenden [`role="…"`](/de/docs/Web/Accessibility/ARIA/Reference/Roles)-Werten agieren standardmäßig als Live-Bereiche:

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
   <td>Chat, Fehler, Spiel oder andere Protokollart</td>
   <td>Um die Kompatibilität zu maximieren, fügen Sie ein redundantes <code>aria-live="polite"</code> hinzu, wenn Sie diese Rolle verwenden.</td>
  </tr>
  <tr>
   <td>status</td>
   <td>Eine Statusleiste oder ein Bereich auf dem Bildschirm, der einen aktualisierten Status irgendeiner Art bereitstellt. Screenreader-Benutzer haben einen speziellen Befehl, um den aktuellen Status zu lesen.</td>
   <td>Um die Kompatibilität zu maximieren, fügen Sie ein redundantes <code>aria-live="polite"</code> hinzu, wenn Sie diese Rolle verwenden.</td>
  </tr>
  <tr>
   <td>alert</td>
   <td>Fehler- oder Warnmeldung, die auf dem Bildschirm erscheint. Alerts sind besonders wichtig für Client-seitige Validierungshinweise an Benutzer. <a href="https://www.w3.org/WAI/ARIA/apg/example-index/alert/alert.html" class="external" rel="noopener">Beispiel für Alert.</a></td>
   <td>Um die Kompatibilität zu maximieren, empfehlen einige, ein redundantes <code>aria-live="assertive"</code> hinzuzufügen, wenn Sie diese Rolle verwenden. Das Hinzufügen von sowohl <code>aria-live</code> als auch <code>role="alert"</code> verursacht jedoch doppelte Sprachprobleme in VoiceOver auf iOS.</td>
  </tr>
  <tr>
   <td>progressbar</td>
   <td>Eine Mischung aus einem Widget und einem Live-Bereich. Verwenden Sie dies mit <code>aria-valuemin</code>, <code>aria-valuenow</code> und <code>aria-valuemax</code>. (TBD: Weitere Informationen hier hinzufügen).</td>
   <td></td>
  </tr>
  <tr>
   <td>marquee</td>
   <td>Text, der scrollt, wie ein Börsenticker.</td>
   <td></td>
  </tr>
  <tr>
   <td>timer</td>
   <td>Jede Art von Timer oder Uhr, wie ein Countdown-Timer oder eine Stoppuhranzeige.</td>
   <td></td>
  </tr>
 </tbody>
</table>

## Zusätzliche Live-Bereichs-Attribute

Live-Bereiche sind gut unterstützt. Die Paciello Group veröffentlichte 2014 [Informationen über den Stand der Unterstützung von Live-Bereichen](https://www.tpgi.com/screen-reader-support-aria-live-regions/). Paul J. Adam hat insbesondere [die Unterstützung von `aria-atomic` und `aria-relevant`](https://pauljadam.com/demos/aria-atomic-relevant.html) untersucht.

1. **`aria-atomic`**: Das `aria-atomic=BOOLEAN` wird verwendet, um festzulegen, ob der Screenreader den gesamten Live-Bereich immer als Ganzes präsentieren soll, auch wenn sich nur ein Teil des Bereichs ändert. Die möglichen Einstellungen sind: `false` oder `true`. Der Standardwert ist `false`.
2. [**`aria-relevant`**](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-relevant)

   : Das `aria-relevant=[LIST_OF_CHANGES]` wird verwendet, um festzulegen, welche Arten von Änderungen für einen Live-Bereich relevant sind. Die möglichen Einstellungen sind eine oder mehrere von: `additions`, `removals`, `text`, `all`. Der Standardwert ist: `additions text`.

### Einfache Beispiele: `aria-atomic`

Als Illustration von `aria-atomic`, betrachten Sie eine Seite mit einer einfachen Uhr, die Stunden und Minuten anzeigt. Die Uhr wird jede Minute aktualisiert, wobei die neue verbleibende Zeit den aktuellen Inhalt überschreibt.

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

Beim ersten Ausführen der Funktion wird der gesamte hinzugefügte String angekündigt. Bei nachfolgenden Aufrufen werden nur die Teile des Inhalts angekündigt, die sich im Vergleich zum vorherigen Inhalt geändert haben. Beispielsweise, wenn die Uhr von "17:33" auf "17:34" wechselt, kündigen assistive Technologien nur "34" an, was für Benutzer nicht sehr nützlich sein wird.

Eine Möglichkeit, dies zu umgehen, wäre, zunächst den gesamten Inhalt des Live-Bereichs zu löschen (in diesem Fall das `innerHTML` beider `<span id="clock-hours">` und `<span id="clock-mins">` leer zu setzen) und dann den neuen Inhalt einzufügen. Dies kann jedoch manchmal unzuverlässig sein, da es von der genauen Zeitpunkt dieser beiden Updates abhängt.

`aria-atomic="true"` stellt sicher, dass jedes Mal, wenn der Live-Bereich aktualisiert wird, der gesamte Inhalt vollständig angekündigt wird (z. B. "17:34").

```html
<div id="clock" role="timer" aria-live="polite" aria-atomic="true">…</div>
```

Ein weiteres Beispiel für `aria-atomic` – ein Update/Benachrichtigung als Ergebnis einer Benutzeraktion.

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

Ohne `aria-atomic="true"` kündigt der Screenreader nur den geänderten Wert des Jahres an. Mit `aria-atomic="true"` kündigt der Screenreader "Das eingestellte Jahr ist: _geänderter Wert_" an.

### Einfaches Beispiel: `aria-relevant`

Mit `aria-relevant` können Sie festlegen, welche Arten von Änderungen/Updates an einem Live-Bereich angekündigt werden sollen.

Als Beispiel betrachten Sie eine Chat-Site, die eine Liste von Benutzern anzeigen möchte, die derzeit eingeloggt sind. Anstatt nur die Benutzer anzukündigen, die derzeit eingeloggt sind, möchten wir eine Ankündigung speziell auslösen, wenn ein Benutzer _aus_ der Liste entfernt wird. Dies können wir erreichen, indem wir `aria-relevant="additions removals"` spezifizieren.

```html
<ul id="roster" aria-live="polite" aria-relevant="additions removals">
  <!-- use JavaScript to add and remove users here -->
</ul>
```

Aufschlüsselung der ARIA Live-Eigenschaften:

- `aria-live="polite"` gibt an, dass der Screenreader warten sollte, bis der Benutzer inaktiv ist, bevor er dem Benutzer Updates bereitstellt. Dies ist der am häufigsten verwendete Wert, da das Unterbrechen des Benutzers mit "assertive" den Fluss unterbrechen könnte.
- `aria-atomic` ist nicht gesetzt (Standardwert `false`), sodass nur die hinzugefügten oder entfernten Benutzer angesprochen werden und nicht jedes Mal die gesamte Liste.
- `aria-relevant="additions removals"` stellt sicher, dass sowohl hinzugefügte als auch entfernte Benutzer in der Liste angesprochen werden.

## Siehe auch

- [ARIA-Rollen](/de/docs/Web/Accessibility/ARIA/Reference/Roles)
- [`Document.ariaNotify()`](/de/docs/Web/API/Document/ariaNotify), [`Element.ariaNotify()`](/de/docs/Web/API/Element/ariaNotify)
