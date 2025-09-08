---
title: ARIA Live-Bereiche
slug: Web/Accessibility/ARIA/Guides/Live_regions
l10n:
  sourceCommit: 57b594763d8e34b8346ee7ea206bfc2e59238fb1
---

Mit JavaScript ist es möglich, Teile einer Seite dynamisch zu ändern, ohne dass die gesamte Seite neu geladen werden muss – zum Beispiel, um eine Liste von Suchergebnissen in Echtzeit zu aktualisieren oder eine dezente Warnung oder Benachrichtigung anzuzeigen, die keine Benutzerinteraktion erfordert. Während diese Änderungen für Benutzer, die die Seite sehen können, normalerweise offensichtlich sind, sind sie möglicherweise nicht für Benutzer von unterstützenden Technologien ersichtlich. ARIA Live-Bereiche schließen diese Lücke und bieten eine Möglichkeit, dynamische Inhaltsänderungen programmgesteuert so offenzulegen, dass sie von unterstützenden Technologien angekündigt werden können.

> [!NOTE]
> Unterstützende Technologien kündigen im Allgemeinen nur _dynamische_ Änderungen im Inhalt eines Live-Bereichs an.
> Wenn Sie einem Element, bei dem Änderungen angekündigt werden sollen, ein `aria-live`-Attribut oder eine spezialisierte Live-Bereichsrolle (wie [`role="status"`](/de/docs/Web/Accessibility/ARIA/Reference/Roles/status_role)) hinzufügen möchten, funktioniert dies, solange Sie das Attribut vor den Änderungen hinzufügen – entweder im ursprünglichen Markup oder dynamisch mit JavaScript. Beginnen Sie mit einem leeren Live-Bereich und ändern Sie dann in einem separaten Schritt den Inhalt innerhalb des Bereichs.
> Obwohl es in der Spezifikation nicht ausdrücklich dokumentiert ist, beinhalten Browser/unterstützende Technologien eine spezielle Behandlung für [`role="alert"`](/de/docs/Web/Accessibility/ARIA/Reference/Roles/alert_role): In den meisten Fällen wird der Inhalt in `role="alert"`-Bereichen angekündigt, selbst wenn der Bereich (der bereits die Benachrichtigung/Meldung enthält) im ursprünglichen Markup der Seite vorhanden oder dynamisch in die Seite eingefügt ist. Beachten Sie jedoch, dass `role="alert"`-Bereiche – abhängig von der spezifischen Kombination aus Browser/unterstützender Technologie – automatisch mit "Warnung" angekündigt werden, wenn sie bekannt gegeben werden.

## Live-Bereiche

Dynamische Inhalte, die ohne ein Neuladen der Seite aktualisiert werden, sind im Allgemeinen entweder ein Bereich oder ein Widget. Einfache Inhaltsänderungen, die nicht interaktiv sind, sollten als Live-Bereiche gekennzeichnet werden. Ein Live-Bereich wird explizit mit dem `aria-live`-Attribut gekennzeichnet.

**`aria-live`**: `aria-live=POLITENESS_SETTING` wird verwendet, um die Priorität festzulegen, mit der ein Bildschirmleser Updates an Live-Bereichen behandeln sollte – die möglichen Einstellungen sind: `off`, `polite` oder `assertive`. Dieses Attribut ist bei weitem das wichtigste.

Normalerweise wird nur `aria-live="polite"` verwendet. Jeder Bereich, der Updates erhält, die für den Benutzer wichtig sind, aber nicht so schnell, dass sie nervig sind, sollte dieses Attribut erhalten. Der Bildschirmleser wird die Änderungen verkünden, wann immer der Benutzer inaktiv ist.

`aria-live="assertive"` sollte nur für zeitkritische/entscheidende Benachrichtigungen verwendet werden, die unbedingt die sofortige Aufmerksamkeit des Benutzers erfordern. Generell unterbricht eine Änderung an einem "assertiven" Live-Bereich jedes gerade stattfindende Announcement eines Bildschirmlesers. Daher kann es äußerst lästig und störend sein und sollte nur sparsam verwendet werden.

Kontraintuitiv zeigt `aria-live="off"` nicht an, dass Änderungen nicht angekündigt werden sollen. Wenn ein Element `aria-live="off"` hat (oder eine `role` mit diesem impliziten Wert, wie `role="marquee"` oder `role="timer"`), sollen Änderungen am Inhalt des Elements nur angekündigt werden, wenn der Fokus auf dem Element oder innerhalb des Elements liegt.

### Einfaches Beispiel: Dropdown-Box aktualisiert nützliche Onscreen-Informationen

Eine Website, die sich darauf spezialisiert, Informationen über Planeten bereitzustellen, bietet eine Dropdown-Box. Wenn ein Planet aus dem Dropdown ausgewählt wird, wird ein Bereich auf der Seite mit Informationen über den ausgewählten Planeten aktualisiert.

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

Wenn der Benutzer einen neuen Planeten auswählt, werden die Informationen im Live-Bereich angekündigt. Da der Live-Bereich `aria-live="polite"` hat, wird der Bildschirmleser warten, bis der Benutzer pausiert, bevor er das Update bekannt gibt. Daher wird das Nach-unten-Gehen in der Liste und die Auswahl eines anderen Planeten keine Updates im Live-Bereich bekannt geben. Updates im Live-Bereich werden nur für den letztendlich gewählten Planeten angekündigt.

Hier ist ein Screenshot von VoiceOver auf dem Mac, das das Update (über Untertitel) an den Live-Bereich ankündigt:

![Ein Screenshot von VoiceOver auf dem Mac, das das Update an einem Live-Bereich ankündigt. Untertitel werden im Bild gezeigt.](web_accessibility_aria_aria_live_regions.png)

## Rollen mit impliziten Live-Bereichs-Attributen

Elemente mit den folgenden [`role="…"`](/de/docs/Web/Accessibility/ARIA/Reference/Roles) Werten fungieren standardmäßig als Live-Bereiche:

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
   <td>Chat-, Fehler-, Spiel- oder andere Log-Typen</td>
   <td>Um die Kompatibilität zu maximieren, fügen Sie ein redundantes <code>aria-live="polite"</code> hinzu, wenn Sie diese Rolle verwenden.</td>
  </tr>
  <tr>
   <td>status</td>
   <td>Eine Statusleiste oder ein Bildschirmbereich, der einen aktualisierten Status bereitstellt. Bildschirmleser-Benutzer haben einen speziellen Befehl, um den aktuellen Status zu lesen.</td>
   <td>Um die Kompatibilität zu maximieren, fügen Sie ein redundantes <code>aria-live="polite"</code> hinzu, wenn Sie diese Rolle verwenden.</td>
  </tr>
  <tr>
   <td>alert</td>
   <td>Fehler- oder Warnmeldung, die auf dem Bildschirm erscheint. Warnungen sind besonders wichtig für klientenseitige Validierungshinweise an Benutzer. <a href="https://www.w3.org/WAI/ARIA/apg/example-index/alert/alert.html" class="external" rel="noopener">Warnungsbeispiel.</a></td>
   <td>Um die Kompatibilität zu maximieren, empfehlen einige Leute, ein redundantes <code>aria-live="assertive"</code> hinzuzufügen, wenn Sie diese Rolle verwenden. Allerdings führt das Hinzufügen von sowohl <code>aria-live</code> als auch <code>role="alert"</code> zu Doppelspracheproblemen in VoiceOver auf iOS.</td>
  </tr>
  <tr>
   <td>progressbar</td>
   <td>Ein Mischling zwischen einem Widget und einem Live-Bereich. Verwenden Sie dies mit <code>aria-valuemin</code>, <code>aria-valuenow</code> und <code>aria-valuemax</code>. (TBD: mehr Informationen hier hinzufügen).</td>
   <td></td>
  </tr>
  <tr>
   <td>marquee</td>
   <td>Text, der scrollt, wie ein Aktienticker.</td>
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

Live-Bereiche sind gut unterstützt. Die Paciello-Gruppe hat 2014 [Informationen über den Stand der Unterstützung von Live-Bereichen](https://www.tpgi.com/screen-reader-support-aria-live-regions/) veröffentlicht. Paul J. Adam hat [die Unterstützung von `aria-atomic` und `aria-relevant`](https://pauljadam.com/demos/aria-atomic-relevant.html) im Besonderen untersucht.

1. **`aria-atomic`**: `aria-atomic=BOOLEAN` wird verwendet, um festzulegen, ob der Bildschirmleser den Live-Bereich immer als Ganzes präsentieren soll, auch wenn nur ein Teil des Bereichs ändert. Die möglichen Einstellungen sind: `false` oder `true`. Die Standardeinstellung ist `false`.
2. [**`aria-relevant`**](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-relevant)

   : `aria-relevant=[LIST_OF_CHANGES]` wird verwendet, um festzulegen, welche Arten von Änderungen für einen Live-Bereich relevant sind. Die möglichen Einstellungen sind eins oder mehrere von: `additions`, `removals`, `text`, `all`. Die Standardeinstellung ist: `additions text`.

### Grundlegende Beispiele: `aria-atomic`

Als Illustration von `aria-atomic`, betrachten wir eine Seite mit einer einfachen Uhr, die Stunden und Minuten anzeigt. Die Uhr wird jede Minute aktualisiert, wobei die neue verbleibende Zeit den aktuellen Inhalt überschreibt.

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

Das erste Mal, wenn die Funktion ausgeführt wird, wird der gesamte hinzugefügte String angekündigt. Bei nachfolgenden Aufrufen werden nur die Teile des Inhalts, die sich im Vergleich zum vorherigen Inhalt geändert haben, angekündigt. Beispielsweise, wenn die Uhr von "17:33" auf "17:34" wechselt, kündigen unterstützende Technologien nur "34" an, was für Benutzer nicht sehr nützlich sein wird.

Ein Weg, dies zu umgehen, wäre zuerst alle Inhalte des Live-Bereichs zu löschen (in diesem Fall, das `innerHTML` sowohl von `<span id="clock-hours">` als auch `<span id="clock-mins">` leer zu setzen) und dann den neuen Inhalt einzufügen. Dies kann jedoch manchmal unzuverlässig sein, da es vom genauen Timing dieser beiden Updates abhängt.

`aria-atomic="true"` stellt sicher, dass jedes Mal, wenn der Live-Bereich aktualisiert wird, der gesamte Inhalt vollständig angekündigt wird (z.B. "17:34").

```html
<div id="clock" role="timer" aria-live="polite" aria-atomic="true">…</div>
```

Ein weiteres Beispiel für `aria-atomic` - ein Update/eine Benachrichtigung, die als Ergebnis einer Benutzeraktion erfolgt.

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

Ohne `aria-atomic="true"` kündigt der Bildschirmleser nur den geänderten Wert des Jahres an. Mit `aria-atomic="true"` kündigt der Bildschirmleser "Das eingestellte Jahr ist: _geänderter Wert_" an.

### Grundlegendes Beispiel: `aria-relevant`

Mit `aria-relevant` können Sie angeben, welche Arten von Änderungen/Updates an einem Live-Bereich angekündigt werden sollen.

Als Beispiel betrachten Sie eine Chat-Site, die eine Liste der derzeit angemeldeten Benutzer anzeigen möchte. Anstatt nur die gerade angemeldeten Benutzer anzukündigen, möchten wir auch eine Ankündigung auslösen, wenn ein Benutzer aus der Liste _entfernt_ wird. Wir können dies erreichen, indem wir `aria-relevant="additions removals"` spezifizieren.

```html
<ul id="roster" aria-live="polite" aria-relevant="additions removals">
  <!-- use JavaScript to add and remove users here -->
</ul>
```

Aufschlüsselung der ARIA Live-Eigenschaften:

- `aria-live="polite"` zeigt an, dass der Bildschirmleser warten soll, bis der Benutzer inaktiv ist, bevor er Updates dem Benutzer präsentiert. Dies ist der am häufigsten verwendete Wert, da das Unterbrechen des Benutzers mit "assertive" seinen Fluss stören könnte.
- `aria-atomic` ist nicht gesetzt (standardmäßig `false`), sodass nur die hinzugefügten oder entfernten Benutzer gesprochen werden und nicht die gesamte Liste jedes Mal.
- `aria-relevant="additions removals"` stellt sicher, dass sowohl hinzugefügte als auch entfernte Benutzer aus der Liste gesprochen werden.

## Siehe auch

- [ARIA-Rollen](/de/docs/Web/Accessibility/ARIA/Reference/Roles)
