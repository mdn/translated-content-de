---
title: ARIA-Live-Regionen
slug: Web/Accessibility/ARIA/Guides/Live_regions
l10n:
  sourceCommit: 702cd9e4d2834e13aea345943efc8d0c03d92ec9
---

Mit JavaScript ist es möglich, Teile einer Seite dynamisch zu ändern, ohne die gesamte Seite neu zu laden – etwa um eine Liste von Suchergebnissen sofort zu aktualisieren oder um eine diskrete Meldung oder Benachrichtigung anzuzeigen, die keine Benutzerinteraktion erfordert. Während diese Änderungen für sehende Benutzer normalerweise visuell erkennbar sind, sind sie möglicherweise nicht offensichtlich für Benutzer von unterstützenden Technologien. ARIA-Live-Regionen füllen diese Lücke und bieten eine Möglichkeit, dynamische Inhaltsänderungen programmatisch offenzulegen, sodass sie von unterstützenden Technologien angesagt werden können.

> [!NOTE]
> Unterstützende Technologien kündigen im Allgemeinen nur _dynamische_ Änderungen im Inhalt einer Live-Region an.
> Das Hinzufügen eines `aria-live`-Attributs oder einer spezialisierten Live-Region `role` (wie [`role="status"`](/de/docs/Web/Accessibility/ARIA/Reference/Roles/status_role)) zu dem Element, für das Sie Änderungen ankündigen möchten, funktioniert nur, wenn Sie das Attribut hinzufügen, bevor die Änderungen erfolgen – entweder im Originalmarkup oder dynamisch mit JavaScript. Beginnen Sie mit einer leeren Live-Region und ändern Sie dann – in einem separaten Schritt – den Inhalt innerhalb der Region.
> Obwohl nicht ausdrücklich in der Spezifikation dokumentiert, beinhalten Browser/unterstützende Technologien eine spezielle Behandlung für [`role="alert"`](/de/docs/Web/Accessibility/ARIA/Reference/Roles/alert_role): In den meisten Fällen wird der Inhalt innerhalb der `role="alert"`-Regionen angekündigt, selbst wenn die Region (die bereits die Benachrichtigung/Nachricht enthält) im anfänglichen Markup der Seite vorhanden ist oder dynamisch in die Seite injiziert wird. Beachten Sie jedoch, dass `role="alert"`-Regionen – abhängig von der spezifischen Browser/unterstützenden Technologie-Kombination – automatisch mit "Alert" versehen werden, wenn sie angekündigt werden.

## Live-Regionen

Dynamische Inhalte, die ohne ein Neuladen der Seite aktualisiert werden, sind im Allgemeinen entweder eine Region oder ein Widget. Einfache Inhaltsänderungen, die nicht interaktiv sind, sollten als Live-Regionen markiert werden. Eine Live-Region wird explizit mit dem `aria-live`-Attribut gekennzeichnet.

**`aria-live`**: Das `aria-live=POLITENESS_SETTING` wird verwendet, um die Priorität festzulegen, mit der der Screenreader Aktualisierungen von Live-Regionen behandeln soll – die möglichen Einstellungen sind: `off`, `polite` oder `assertive`. Dieses Attribut ist bei weitem das wichtigste.

Normalerweise wird nur `aria-live="polite"` verwendet. Jede Region, die wichtige Updates enthält, aber nicht so häufig sind, dass sie störend wirken, sollte dieses Attribut erhalten. Der Screenreader spricht Änderungen, wenn der Benutzer eine Pause macht.

`aria-live="assertive"` sollte nur für zeitkritische Benachrichtigungen verwendet werden, die absolut die sofortige Aufmerksamkeit des Benutzers erfordern. Im Allgemeinen unterbricht eine Änderung einer assertiven Live-Region jede Ankündigung, die ein Screenreader gerade macht. Daher kann es extrem störend sein und sollte nur sparsam verwendet werden.

Unintuitiv zeigt `aria-live="off"` nicht an, dass Änderungen nicht angekündigt werden sollten. Wenn ein Element `aria-live="off"` hat (oder eine `role` mit diesem impliziten Wert, wie `role="marquee"` oder `role="timer"`), sollten Änderungen des Inhalts des Elements nur angekündigt werden, wenn der Fokus auf dem Element liegt oder sich innerhalb des Elements befindet.

### Einfaches Beispiel: Dropdown-Feld aktualisiert nützliche Bildschirminformationen

Eine Website, die sich auf die Bereitstellung von Informationen über Planeten spezialisiert hat, bietet ein Dropdown-Feld an. Wenn ein Planet im Dropdown ausgewählt wird, wird eine Region auf der Seite mit Informationen über den ausgewählten Planeten aktualisiert.

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

Wenn der Benutzer einen neuen Planeten auswählt, werden die Informationen in der Live-Region angekündigt. Da die Live-Region `aria-live="polite"` hat, wartet der Screenreader, bis der Benutzer pausiert, bevor das Update angekündigt wird. Somit wird beim Bewegen in der Liste und beim Auswählen eines anderen Planeten kein Update in der Live-Region angekündigt. Updates in der Live-Region werden nur für den final gewählten Planeten angekündigt.

Hier ist ein Screenshot von VoiceOver auf Mac, das das Update (via Untertitel) zur Live-Region ankündigt:

![Ein Screenshot von VoiceOver auf Mac, das das Update zu einer Live-Region ankündigt. Untertitel werden im Bild angezeigt.](web_accessibility_aria_aria_live_regions.png)

## Rollen mit impliziten Live-Region-Attributen

Elemente mit den folgenden [`role="…"`](/de/docs/Web/Accessibility/ARIA/Reference/Roles)-Werten fungieren standardmäßig als Live-Regionen:

<table style="width: 100%;">
 <thead>
  <tr>
   <th scope="col">Rolle</th>
   <th scope="col">Beschreibung</th>
   <th scope="col">Kompatibilitäts-Hinweise</th>
  </tr>
 </thead>
 <tbody>
  <tr>
   <td>log</td>
   <td>Chat-, Fehler-, Spiel- oder andere Protokolltypen</td>
   <td>Um die Kompatibilität zu maximieren, fügen Sie ein redundantes <code>aria-live="polite"</code> hinzu, wenn Sie diese Rolle verwenden.</td>
  </tr>
  <tr>
   <td>status</td>
   <td>Eine Statusleiste oder ein Bereich des Bildschirms, der einen aktualisierten Status irgendeiner Art bietet. Screenreader-Nutzer haben einen speziellen Befehl, um den aktuellen Status zu lesen.</td>
   <td>Um die Kompatibilität zu maximieren, fügen Sie ein redundantes <code>aria-live="polite"</code> hinzu, wenn Sie diese Rolle verwenden.</td>
  </tr>
  <tr>
   <td>alert</td>
   <td>Fehler- oder Warnmeldung, die auf dem Bildschirm aufblitzt. Warnungen sind besonders wichtig für Client-seitige Validierungsmitteilungen an Benutzer. <a href="https://www.w3.org/WAI/ARIA/apg/example-index/alert/alert.html" class="external" rel="noopener">Beispiel für eine Warnmeldung.</a></td>
   <td>Um die Kompatibilität zu maximieren, empfehlen einige, ein redundantes <code>aria-live="assertive"</code> hinzuzufügen, wenn Sie diese Rolle verwenden. Allerdings verursacht das Hinzufügen von sowohl <code>aria-live</code> als auch <code>role="alert"</code> doppelte Sprechprobleme in VoiceOver auf iOS.</td>
  </tr>
  <tr>
   <td>progressbar</td>
   <td>Ein Hybrid zwischen einem Widget und einer Live-Region. Verwenden Sie dies zusammen mit <code>aria-valuemin</code>, <code>aria-valuenow</code> und <code>aria-valuemax</code>. (TBD: Weitere Infos hier hinzufügen).</td>
   <td></td>
  </tr>
  <tr>
   <td>marquee</td>
   <td>Text, der scrollt, wie ein Börsenticker.</td>
   <td></td>
  </tr>
  <tr>
   <td>timer</td>
   <td>Jede Art von Timer oder Uhr, wie ein Countdown-Timer oder Stoppuhranzeige.</td>
   <td></td>
  </tr>
 </tbody>
</table>

## Zusätzliche Live-Region-Attribute

Live-Regionen sind gut unterstützt. Die Paciello Group veröffentlichte 2014 [Informationen über den Stand der Unterstützung von Live-Regionen](https://www.tpgi.com/screen-reader-support-aria-live-regions/). Paul J. Adam hat spezifisch [die Unterstützung von `aria-atomic` und `aria-relevant`](https://pauljadam.com/demos/aria-atomic-relevant.html) untersucht.

1. **`aria-atomic`**: Das `aria-atomic=BOOLEAN` wird verwendet, um festzulegen, ob der Screenreader die Live-Region immer als Ganzes präsentieren soll, auch wenn nur ein Teil der Region Änderungen erfährt. Die möglichen Einstellungen sind: `false` oder `true`. Die Standardeinstellung ist `false`.
2. [**`aria-relevant`**](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-relevant)

   : Das `aria-relevant=[LIST_OF_CHANGES]` wird verwendet, um festzulegen, welche Arten von Änderungen für eine Live-Region relevant sind. Die möglichen Einstellungen sind eine oder mehrere von: `additions`, `removals`, `text`, `all`. Die Standardeinstellung ist: `additions text`.

### Grundlegende Beispiele: `aria-atomic`

Zur Veranschaulichung von `aria-atomic` betrachtet man eine Seite mit einer einfachen Uhr, die Stunden und Minuten anzeigt. Die Uhr wird jede Minute aktualisiert, wobei die neue verbleibende Zeit den aktuellen Inhalt überschreibt.

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

Beim ersten Ausführen der Funktion wird die gesamte Zeichenkette, die hinzugefügt wird, angekündigt. Bei nachfolgenden Aufrufen werden nur die Teile des Inhalts angekündigt, die sich im Vergleich zum vorherigen Inhalt geändert haben. Zum Beispiel, wenn die Uhr von "17:33" zu "17:34" wechselt, werden unterstützende Technologien nur "34" ankündigen, was für Benutzer nicht sehr nützlich sein wird.

Ein Weg, dies zu umgehen, wäre zunächst alle Inhalte der Live-Region zu löschen (in diesem Fall das `innerHTML` von sowohl `<span id="clock-hours">` als auch `<span id="clock-mins">` auf leer zu setzen) und dann den neuen Inhalt einzufügen. Dies kann jedoch manchmal unzuverlässig sein, da es vom genauen Timing dieser beiden Updates abhängt.

`aria-atomic="true"` stellt sicher, dass jedes Mal, wenn die Live-Region aktualisiert wird, der gesamte Inhalt vollständig angekündigt wird (z.B. "17:34").

```html
<div id="clock" role="timer" aria-live="polite" aria-atomic="true">…</div>
```

Ein weiteres Beispiel für `aria-atomic` – ein Update/Benachrichtigung als Ergebnis einer Benutzeraktion.

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

### Grundlegendes Beispiel: `aria-relevant`

Mit `aria-relevant` können Sie festlegen, welche Arten von Änderungen/Aktualisierungen an einer Live-Region angekündigt werden sollen.

Als Beispiel betrachten wir eine Chat-Seite, die eine Liste der derzeit angemeldeten Benutzer anzeigen möchte. Anstatt nur die derzeit angemeldeten Benutzer anzukündigen, möchten wir auch eine spezielle Ankündigung auslösen, wenn ein Benutzer _aus_ der Liste entfernt wird. Wir können dies erreichen, indem wir `aria-relevant="additions removals"` spezifizieren.

```html
<ul id="roster" aria-live="polite" aria-relevant="additions removals">
  <!-- use JavaScript to add and remove users here -->
</ul>
```

Aufschlüsselung der ARIA-Live-Eigenschaften:

- `aria-live="polite"` zeigt an, dass der Screenreader warten soll, bis der Benutzer inaktiv ist, bevor Updates angekündigt werden. Dies ist der am häufigsten verwendete Wert, da ein Intervenieren mit "assertiv" den Fluss des Benutzers unterbrechen könnte.
- `aria-atomic` ist nicht gesetzt (standardmäßig `false`), damit nur die hinzugefügten oder entfernten Benutzer angesagt werden und nicht jedes Mal die gesamte Liste.
- `aria-relevant="additions removals"` stellt sicher, dass sowohl hinzugefügte als auch entfernte Benutzer angesagt werden.

## Siehe auch

- [ARIA-Rollen](/de/docs/Web/Accessibility/ARIA/Reference/Roles)
