---
title: ARIA-Live-Regions
slug: Web/Accessibility/ARIA/Guides/Live_regions
l10n:
  sourceCommit: 04cf692e8b950c028aca8fab9664d52e7cbfaebf
---

Mit JavaScript ist es möglich, Teile einer Seite dynamisch zu ändern, ohne dass die gesamte Seite neu geladen werden muss – beispielsweise, um eine Liste von Suchergebnissen direkt zu aktualisieren oder eine dezente Warnung bzw. Benachrichtigung anzuzeigen, die keine Benutzerinteraktion erfordert. Während diese Änderungen für Benutzer, die die Seite sehen können, normalerweise visuell offensichtlich sind, sind sie für Benutzer assistiver Technologien möglicherweise nicht erkennbar. ARIA-Live-Regions schließen diese Lücke und bieten eine Möglichkeit, dynamische Inhaltsänderungen programmgesteuert so bereitzustellen, dass sie von assistiven Technologien angekündigt werden können.

## Live-Regions

Dynamische Inhalte, die ohne Neuladen der Seite aktualisiert werden, sind im Allgemeinen entweder eine Region oder ein Widget. Einfache Inhaltsänderungen, die nicht interaktiv sind, sollten als Live-Regions gekennzeichnet werden. Eine Live-Region wird ausdrücklich mit dem Attribut `aria-live` gekennzeichnet.

**`aria-live`**: `aria-live=POLITENESS_SETTING` wird verwendet, um die Priorität festzulegen, mit der ein Screenreader Aktualisierungen von Live-Regions behandeln soll – die möglichen Einstellungen sind: `off`, `polite` oder `assertive`. Dieses Attribut ist bei weitem das wichtigste.

Normalerweise wird nur `aria-live="polite"` verwendet. Jede Region, die Aktualisierungen erhält, deren Erhalt für den Benutzer wichtig ist, die jedoch nicht so häufig erfolgen, dass sie störend sind, sollte dieses Attribut erhalten. Der Screenreader gibt Änderungen aus, sobald der Benutzer inaktiv ist.

`aria-live="assertive"` sollte nur für zeitkritische Benachrichtigungen verwendet werden, die unbedingt die sofortige Aufmerksamkeit des Benutzers erfordern. Im Allgemeinen unterbricht eine Änderung an einer assertiven Live-Region jede Ankündigung, die ein Screenreader gerade ausgibt. Daher kann dies äußerst störend sein und sollte nur sparsam verwendet werden.

Entgegen der Intuition bedeutet `aria-live="off"` nicht, dass Änderungen nicht angekündigt werden sollen. Wenn ein Element `aria-live="off"` besitzt (oder eine `role` mit diesem impliziten Wert, etwa `role="marquee"` oder `role="timer"`), sollen Änderungen am Inhalt des Elements nur angekündigt werden, wenn sich der Fokus auf oder innerhalb des Elements befindet.

Live-Regions werden normalerweise als Klartext angekündigt. Daher werden Links, Schaltflächen und andere Semantiken im aktualisierten Inhalt möglicherweise nicht in der Ankündigung selbst vermittelt.

Assistive Technologien kündigen im Allgemeinen nur _dynamische_ Änderungen am Inhalt einer Live-Region an. Erstellen Sie die Live-Region, bevor Sie ihren Inhalt aktualisieren. Beginnen Sie mit einer leeren Live-Region und geben Sie ihr dann Zeit, für assistive Technologien verfügbar zu werden, bevor Sie ihren Inhalt aktualisieren. Wenn Sie die Region mit JavaScript erstellen (entweder durch Einfügen eines neuen Elements oder durch Hinzufügen von `aria-live` zu einem bestehenden Element), verschieben Sie die Inhaltsaktualisierung auf eine spätere Event-Loop-Aufgabe, beispielsweise mit `setTimeout()`. Das Verhalten kann je nach Kombination aus Browser und assistiver Technologie unterschiedlich sein. Die zuverlässigste Methode, um sicherzustellen, dass Live-Regions registriert werden, besteht darin, sie in das anfängliche Markup aufzunehmen.

> [!NOTE]
> Obwohl dies in der Spezifikation nicht ausdrücklich dokumentiert ist, enthalten Browser/assistive Technologien eine spezielle Behandlung für [`role="alert"`](/de/docs/Web/Accessibility/ARIA/Reference/Roles/alert_role): In den meisten Fällen wird der Inhalt innerhalb von `role="alert"`-Regionen angekündigt, selbst wenn die Region (die die Benachrichtigung/Nachricht bereits enthält) im anfänglichen Markup der Seite vorhanden ist oder dynamisch in die Seite eingefügt wird. Beachten Sie jedoch, dass `role="alert"`-Regionen – abhängig von der jeweiligen Browser-/assistive-Technologie-Kombination – bei ihrer Ankündigung automatisch mit „Alert“ vorangestellt werden.

### Grundlegendes Beispiel: Dropdown-Feld aktualisiert nützliche Informationen auf dem Bildschirm

Eine Website, die auf Informationen über Planeten spezialisiert ist, bietet ein Dropdown-Feld. Wenn ein Planet aus dem Dropdown ausgewählt wird, wird eine Region auf der Seite mit Informationen über den ausgewählten Planeten aktualisiert.

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

Wenn der Benutzer einen neuen Planeten auswählt, werden die Informationen in der Live-Region angekündigt. Da die Live-Region `aria-live="polite"` besitzt, wartet der Screenreader, bis der Benutzer innehält, bevor er die Aktualisierung ankündigt. Das Navigieren in der Liste und Auswählen eines anderen Planeten führt daher nicht zur Ankündigung von Aktualisierungen in der Live-Region. Aktualisierungen in der Live-Region werden nur für den letztendlich ausgewählten Planeten angekündigt.

Hier ist ein Screenshot von VoiceOver auf dem Mac, das die Aktualisierung der Live-Region ankündigt (über Untertitel):

![Ein Screenshot von VoiceOver auf dem Mac, das die Aktualisierung einer Live-Region ankündigt. Untertitel sind im Bild zu sehen.](web_accessibility_aria_aria_live_regions.png)

## Rollen mit impliziten Live-Region-Attributen

Elemente mit den folgenden [`role="…"`](/de/docs/Web/Accessibility/ARIA/Reference/Roles)-Werten fungieren standardmäßig als Live-Regions:

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
   <td>Chat-, Fehler-, Spiel- oder anderer Log-Typ</td>
   <td>Um die Kompatibilität zu maximieren, fügen Sie bei Verwendung dieser Rolle zusätzlich <code>aria-live="polite"</code> hinzu.</td>
  </tr>
  <tr>
   <td>status</td>
   <td>Eine Statusleiste oder ein Bereich des Bildschirms, der einen aktualisierten Status irgendeiner Art bereitstellt. Benutzer von Screenreadern verfügen über einen speziellen Befehl, um den aktuellen Status zu lesen.</td>
   <td>Um die Kompatibilität zu maximieren, fügen Sie bei Verwendung dieser Rolle zusätzlich <code>aria-live="polite"</code> hinzu.</td>
  </tr>
  <tr>
   <td>alert</td>
   <td>Fehler- oder Warnmeldung, die auf dem Bildschirm aufblinkt. Warnungen sind besonders wichtig für Hinweise zur clientseitigen Validierung für Benutzer. <a href="https://www.w3.org/WAI/ARIA/apg/example-index/alert/alert.html" class="external" rel="noopener">Alert-Beispiel.</a></td>
   <td>Um die Kompatibilität zu maximieren, empfehlen manche Personen, bei Verwendung dieser Rolle zusätzlich <code>aria-live="assertive"</code> hinzuzufügen. Das Hinzufügen von sowohl <code>aria-live</code> als auch <code>role="alert"</code> führt jedoch in VoiceOver unter iOS zu Problemen mit doppelten Ansagen.</td>
  </tr>
  <tr>
   <td>progressbar</td>
   <td>Eine Mischung aus einem Widget und einer Live-Region. Verwenden Sie dies mit <code>aria-valuemin</code>, <code>aria-valuenow</code> und <code>aria-valuemax</code>. (TBD: Weitere Informationen hier hinzufügen).</td>
   <td></td>
  </tr>
  <tr>
   <td>marquee</td>
   <td>Scrollender Text, etwa ein Börsenticker.</td>
   <td></td>
  </tr>
  <tr>
   <td>timer</td>
   <td>Jede Art von Timer oder Uhr, etwa ein Countdown-Timer oder die Anzeige einer Stoppuhr.</td>
   <td></td>
  </tr>
 </tbody>
</table>

## Zusätzliche Live-Region-Attribute

Live-Regions werden gut unterstützt. Vispero veröffentlichte 2014 [Informationen über den Stand der Unterstützung von Live-Regions](https://vispero.com/resources/screen-reader-support-aria-live-regions/). Paul J. Adam hat insbesondere [die Unterstützung von `aria-atomic` und `aria-relevant`](https://pauljadam.com/demos/aria-atomic-relevant.html) untersucht.

1. **`aria-atomic`**: `aria-atomic=BOOLEAN` wird verwendet, um festzulegen, ob der Screenreader die Live-Region immer als Ganzes präsentieren soll, selbst wenn sich nur ein Teil der Region ändert. Die möglichen Einstellungen sind: `false` oder `true`. Die Standardeinstellung ist `false`.
2. [**`aria-relevant`**](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-relevant)

   : `aria-relevant=[LIST_OF_CHANGES]` wird verwendet, um festzulegen, welche Arten von Änderungen für eine Live-Region relevant sind. Die möglichen Einstellungen sind eine oder mehrere der folgenden: `additions`, `removals`, `text`, `all`. Die Standardeinstellung ist: `additions text`.

### Grundlegende Beispiele: `aria-atomic`

Betrachten Sie zur Veranschaulichung von `aria-atomic` eine Website mit einer einfachen Uhr, die Stunden und Minuten anzeigt. Die Uhr wird jede Minute aktualisiert, wobei die neue verbleibende Zeit den aktuellen Inhalt überschreibt.

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

Beim ersten Ausführen der Funktion wird die gesamte hinzugefügte Zeichenfolge angekündigt. Bei nachfolgenden Aufrufen werden nur die Teile des Inhalts angekündigt, die sich gegenüber dem vorherigen Inhalt geändert haben. Wenn sich die Uhr beispielsweise von „17:33“ auf „17:34“ ändert, kündigen assistive Technologien nur „34“ an, was für Benutzer nicht besonders nützlich ist.

Eine Möglichkeit, dies zu umgehen, wäre, zunächst den gesamten Inhalt der Live-Region zu löschen (in diesem Fall das `innerHTML` von sowohl `<span id="clock-hours">` als auch `<span id="clock-mins">` auf leer zu setzen) und anschließend den neuen Inhalt einzufügen. Dies kann jedoch manchmal unzuverlässig sein, da es vom exakten Timing dieser beiden Aktualisierungen abhängt.

`aria-atomic="true"` stellt sicher, dass bei jeder Aktualisierung der Live-Region der gesamte Inhalt vollständig angekündigt wird (z. B. „17:34“).

```html
<div id="clock" role="timer" aria-live="polite" aria-atomic="true">…</div>
```

Ein weiteres Beispiel für `aria-atomic` – eine Aktualisierung/Benachrichtigung als Ergebnis einer Benutzeraktion.

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

Ohne `aria-atomic="true"` kündigt der Screenreader nur den geänderten Jahreswert an. Mit `aria-atomic="true"` kündigt der Screenreader „Das festgelegte Jahr ist: _geänderter Wert_“ an.

### Grundlegendes Beispiel: `aria-relevant`

Mit `aria-relevant` können Sie festlegen, welche Arten von Änderungen/Aktualisierungen einer Live-Region angekündigt werden sollen.

Betrachten Sie beispielsweise eine Chat-Website, die eine Liste der aktuell angemeldeten Benutzer anzeigen möchte. Anstatt nur die aktuell angemeldeten Benutzer anzukündigen, möchten wir auch gezielt eine Ankündigung auslösen, wenn ein Benutzer aus der Liste _entfernt_ wird. Dies können wir erreichen, indem wir `aria-relevant="additions removals"` angeben.

```html
<ul id="roster" aria-live="polite" aria-relevant="additions removals">
  <!-- use JavaScript to add and remove users here -->
</ul>
```

Aufschlüsselung der ARIA-Live-Eigenschaften:

- `aria-live="polite"` gibt an, dass der Screenreader warten soll, bis der Benutzer inaktiv ist, bevor er Aktualisierungen präsentiert. Dies ist der am häufigsten verwendete Wert, da die Unterbrechung des Benutzers mit „assertive“ seinen Arbeitsfluss stören könnte.
- `aria-atomic` ist nicht gesetzt (standardmäßig `false`), sodass nur die hinzugefügten oder entfernten Benutzer und nicht jedes Mal die gesamte Liste ausgegeben werden sollen.
- `aria-relevant="additions removals"` stellt sicher, dass sowohl zur Liste hinzugefügte als auch daraus entfernte Benutzer ausgegeben werden.

## Siehe auch

- [ARIA-Rollen](/de/docs/Web/Accessibility/ARIA/Reference/Roles)
- [`Document.ariaNotify()`](/de/docs/Web/API/Document/ariaNotify), [`Element.ariaNotify()`](/de/docs/Web/API/Element/ariaNotify)
