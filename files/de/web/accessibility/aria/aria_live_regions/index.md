---
title: ARIA Live-Bereiche
slug: Web/Accessibility/ARIA/ARIA_Live_Regions
l10n:
  sourceCommit: 194bd13942ad0c532c92d364e0d5d0c36732d98c
---

{{AccessibilitySidebar}}

Mit JavaScript ist es möglich, Teile einer Seite dynamisch zu ändern, ohne die gesamte Seite neu laden zu müssen – zum Beispiel, um eine Liste von Suchergebnissen in Echtzeit zu aktualisieren oder eine diskrete Warnung oder Benachrichtigung anzuzeigen, die keine Benutzerinteraktion erfordert. Während diese Änderungen normalerweise für Benutzer, die die Seite sehen können, offensichtlich sind, sind sie möglicherweise nicht für Benutzer von unterstützenden Technologien erkennbar. ARIA Live-Bereiche schließen diese Lücke und bieten eine Möglichkeit, dynamische Inhaltsänderungen programmgesteuert offenzulegen, sodass sie von unterstützenden Technologien angesagt werden können.

> [!NOTE]
> Unterstützende Technologien geben in der Regel nur _dynamische_ Änderungen im Inhalt eines Live-Bereichs wieder.
> Das Hinzufügen eines `aria-live`-Attributs oder einer speziellen Live-Bereichsrolle (wie [`role="status"`](/de/docs/Web/Accessibility/ARIA/Roles/status_role)) zu dem Element, dessen Änderungen Sie ankündigen möchten, funktioniert, solange Sie das Attribut hinzufügen, bevor die Änderungen erfolgen - entweder im ursprünglichen Markup oder dynamisch mit JavaScript. Beginnen Sie mit einem leeren Live-Bereich und ändern Sie danach – in einem separaten Schritt – den Inhalt innerhalb des Bereichs.
> Obwohl es in der Spezifikation nicht ausdrücklich dokumentiert ist, beinhalten Browser/unterstützende Technologien eine spezielle Handhabung für [`role="alert"`](/de/docs/Web/Accessibility/ARIA/Roles/alert_role): In den meisten Fällen wird der Inhalt innerhalb von `role="alert"` Bereichen angesagt, selbst wenn der Bereich (der bereits die Benachrichtigung/Nachricht enthält) im ursprünglichen Markup der Seite vorhanden ist oder dynamisch in die Seite eingefügt wird. Beachten Sie jedoch, dass `role="alert"` Bereiche - je nach spezifischer Browser-/Technologiekombination - bei der Ankündigung automatisch mit "Warnung" vorangestellt werden.

## Live-Bereiche

Dynamische Inhalte, die ohne Neuladen der Seite aktualisiert werden, sind im Allgemeinen entweder ein Bereich oder ein Widget. Einfache Inhaltsänderungen, die nicht interaktiv sind, sollten als Live-Bereiche markiert werden. Ein Live-Bereich wird ausdrücklich durch das `aria-live`-Attribut gekennzeichnet.

**`aria-live`**: Das `aria-live=POLITENESS_SETTING` wird verwendet, um die Priorität festzulegen, mit der Bildschirmlesegeräte Aktualisierungen von Live-Bereichen behandeln sollen - die möglichen Einstellungen sind: `off`, `polite` oder `assertive`. Dieses Attribut ist bei weitem das wichtigste.

Normalerweise wird nur `aria-live="polite"` verwendet. Jeder Bereich, der Aktualisierungen erhält, die für den Benutzer wichtig sind, aber nicht so schnell, dass sie störend sind, sollte dieses Attribut erhalten. Das Bildschirmlesegerät wird die Änderungen ansagen, wann immer der Benutzer inaktiv ist.

`aria-live="assertive"` sollte nur für zeitkritische Benachrichtigungen verwendet werden, die die sofortige Aufmerksamkeit des Benutzers erfordern. In der Regel unterbricht eine Änderung eines assertiven Live-Bereichs jede Ansage, die ein Bildschirmlesegerät derzeit macht. Daher kann es extrem lästig und störend sein und sollte nur sparsam verwendet werden.

Ungewöhnlicherweise zeigt `aria-live="off"` nicht an, dass Änderungen nicht angekündigt werden sollten. Wenn ein Element `aria-live="off"` hat (oder eine `role`, die diesen impliziten Wert hat, wie `role="marquee"` oder `role="timer"`), sollten Änderungen am Inhalt des Elements nur dann angekündigt werden, wenn der Fokus auf dem Element oder innerhalb des Elements liegt.

### Einfaches Beispiel: Dropdown-Box aktualisiert nützliche Informationen auf dem Bildschirm

Eine Website, die auf Informationen über Planeten spezialisiert ist, bietet eine Dropdown-Box an. Wenn ein Planet aus dem Dropdown ausgewählt wird, wird ein Bereich auf der Seite mit Informationen über den ausgewählten Planeten aktualisiert.

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

Wenn der Benutzer einen neuen Planeten auswählt, wird die Information im Live-Bereich angekündigt. Da der Live-Bereich `aria-live="polite"` hat, wartet das Bildschirmlesegerät, bis der Benutzer eine Pause macht, bevor es die Aktualisierung ankündigt. Daher werden während des Herunterblätterns in der Liste und der Auswahl eines anderen Planeten keine Aktualisierungen im Live-Bereich angekündigt. Aktualisierungen im Live-Bereich werden nur für den letztendlich gewählten Planeten angekündigt.

Hier ist ein Screenshot von VoiceOver auf Mac, das das Update (über Untertitel) im Live-Bereich ankündigt:

![Ein Screenshot von VoiceOver auf Mac, das das Update zu einem Live-Bereich ankündigt. Untertitel sind im Bild dargestellt.](web_accessibility_aria_aria_live_regions.png)

## Rollen mit impliziten Live-Bereichsattributen

Elemente mit den folgenden [`role="…"`](/de/docs/Web/Accessibility/ARIA/Roles) Werten fungieren standardmäßig als Live-Bereiche:

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
   <td>Chat, Fehler, Spiel oder andere Art von Protokoll</td>
   <td>Um die Kompatibilität zu maximieren, fügen Sie ein redundantes <code>aria-live="polite"</code> hinzu, wenn Sie diese Rolle nutzen.</td>
  </tr>
  <tr>
   <td>status</td>
   <td>Eine Statusleiste oder ein Bildschirmbereich, der einen aktualisierten Status irgendeiner Art bietet. Bildschirmlesegeräte-Benutzer haben einen speziellen Befehl, um den aktuellen Status zu lesen.</td>
   <td>Um die Kompatibilität zu maximieren, fügen Sie ein redundantes <code>aria-live="polite"</code> hinzu, wenn Sie diese Rolle nutzen.</td>
  </tr>
  <tr>
   <td>alert</td>
   <td>Fehler- oder Warnmeldung, die auf dem Bildschirm aufblinkt. Warnungen sind besonders wichtig für clientseitige Validierungshinweise für Benutzer. <a href="https://www.w3.org/WAI/ARIA/apg/example-index/alert/alert.html" class="external" rel=" noopener">Beispiel für Warnung.</a></td>
   <td>Um die Kompatibilität zu maximieren, empfehlen einige Leute, ein redundantes <code>aria-live="assertive"</code> hinzuzufügen, wenn Sie diese Rolle nutzen. Das Hinzufügen sowohl von <code>aria-live</code> als auch von <code>role="alert"</code> verursacht jedoch doppelte Sprechprobleme in VoiceOver auf iOS.</td>
  </tr>
  <tr>
   <td>progressbar</td>
   <td>Eine Hybridform zwischen einem Widget und einem Live-Bereich. Verwenden Sie dies mit <code>aria-valuemin</code>, <code>aria-valuenow</code> und <code>aria-valuemax</code>. (TBD: Weitere Informationen hinzufügen).</td>
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

## Zusätzliche Live-Bereichsattribute

Live-Bereiche sind gut unterstützt. Die Paciello Group veröffentlichte 2014 [Informationen über den Stand der Unterstützung von Live-Bereichen](https://www.tpgi.com/screen-reader-support-aria-live-regions/). Paul J. Adam hat im Besonderen die [Unterstützung von `aria-atomic` und `aria-relevant`](https://pauljadam.com/demos/aria-atomic-relevant.html) untersucht.

1. **`aria-atomic`**: Das `aria-atomic=BOOLEAN` wird verwendet, um festzulegen, ob das Bildschirmlesegerät den gesamten Live-Bereich immer als Ganzes präsentieren soll, selbst wenn sich nur ein Teil des Bereichs ändert. Die möglichen Einstellungen sind: `false` oder `true`. Die Standardeinstellung ist `false`.
2. [**`aria-relevant`**](/de/docs/Web/Accessibility/ARIA/Attributes/aria-relevant)

   : Das `aria-relevant=[LIST_OF_CHANGES]` wird verwendet, um festzulegen, welche Arten von Änderungen für einen Live-Bereich relevant sind. Die möglichen Einstellungen sind eine oder mehrere der folgenden: `additions`, `removals`, `text`, `all`. Die Standardeinstellung ist: `additions text`.

### Einfache Beispiele: `aria-atomic`

Als eine Veranschaulichung von `aria-atomic`, nehmen Sie eine Website mit einer einfachen Uhr, die Stunden und Minuten anzeigt. Die Uhr wird jede Minute aktualisiert, wobei die verbleibende Zeit den aktuellen Inhalt überschreibt.

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

Beim ersten Ausführen der Funktion wird die gesamte hinzugefügte Zeichenkette angekündigt. Bei nachfolgenden Aufrufen werden nur die Teile des Inhalts angekündigt, die sich im Vergleich zum vorherigen Inhalt geändert haben. Beispielsweise, wenn sich die Uhr von "17:33" auf "17:34" ändert, werden unterstützende Technologien nur "34" ansagen, was für Benutzer nicht sehr nützlich sein wird.

Eine Möglichkeit, dies zu umgehen, wäre, zuerst alle Inhalte des Live-Bereichs zu löschen (in diesem Fall das `innerHTML` sowohl von `<span id="clock-hours">` als auch `<span id="clock-mins">` auf leer zu setzen) und dann den neuen Inhalt einzufügen. Dies kann jedoch manchmal unzuverlässig sein, da es von der genauen Zeitsteuerung dieser beiden Aktualisierungen abhängt.

`aria-atomic="true"` sorgt dafür, dass bei jeder Aktualisierung des Live-Bereichs der gesamte Inhalt in voller Länge angekündigt wird (z.B. "17:34").

```html
<div id="clock" role="timer" aria-live="polite" aria-atomic="true">…</div>
```

Ein weiteres Beispiel für `'aria-atomic` - eine Aktualisierung/Benachrichtigung infolge einer Benutzeraktion.

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

Ohne `aria-atomic="true"` kündigt das Bildschirmlesegerät nur den geänderten Wert des Jahres an. Mit `aria-atomic="true"` kündigt das Bildschirmlesegerät an: "Das eingestellte Jahr ist: _geänderter Wert_".

### Einfaches Beispiel: `aria-relevant`

Mit `aria-relevant` können Sie festlegen, welche Arten von Änderungen/Aktualisierungen an einem Live-Bereich angekündigt werden sollen.

Als Beispiel betrachten Sie eine Chat-Website, die eine Liste von Benutzern anzeigt, die gerade eingeloggt sind. Anstatt nur die aktuell eingeloggt Benutzer anzusagen, möchten wir auch eine Ankündigung auslösen, wenn ein Benutzer _aus der Liste entfernt_ wird. Wir können dies erreichen, indem wir `aria-relevant="additions removals"` angeben.

```html
<ul id="roster" aria-live="polite" aria-relevant="additions removals">
  <!-- use JavaScript to add and remove users here -->
</ul>
```

Aufschlüsselung der ARIA Live-Eigenschaften:

- `aria-live="polite"` zeigt an, dass das Bildschirmlesegerät warten soll, bis der Benutzer inaktiv ist, bevor es Aktualisierungen dem Benutzer präsentiert. Dies ist der am häufigsten verwendete Wert, da das Unterbrechen des Benutzers mit "assertive" den Fluss unterbrechen kann.
- `aria-atomic` ist nicht gesetzt (`false` standardmäßig), sodass nur die hinzugefügten oder entfernten Benutzer angesagt werden sollen und nicht der gesamte Teilnehmerstand bei jeder Aktualisierung.
- `aria-relevant="additions removals"` stellt sicher, dass sowohl hinzugefügte als auch entfernte Benutzer angesagt werden.

## Siehe auch

- [ARIA-Rollen](/de/docs/Web/Accessibility/ARIA/Roles)
