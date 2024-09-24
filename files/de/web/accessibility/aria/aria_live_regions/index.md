---
title: ARIA Live-Bereiche
slug: Web/Accessibility/ARIA/ARIA_Live_Regions
l10n:
  sourceCommit: 194bd13942ad0c532c92d364e0d5d0c36732d98c
---

{{AccessibilitySidebar}}

Mittels JavaScript ist es möglich, Teile einer Seite dynamisch zu ändern, ohne dass die gesamte Seite neu geladen werden muss – z.B. um eine Liste von Suchergebnissen in Echtzeit zu aktualisieren oder um einen diskreten Alarm oder eine Benachrichtigung anzuzeigen, die keine Benutzerinteraktion erfordert. Während diese Änderungen für Benutzer, die die Seite sehen können, normalerweise visuell offensichtlich sind, sind sie möglicherweise nicht offensichtlich für Benutzer von unterstützenden Technologien. ARIA Live-Bereiche schließen diese Lücke und bieten eine Möglichkeit, dynamische Inhaltsänderungen programmatisch offenzulegen, sodass sie von unterstützenden Technologien angekündigt werden können.

> [!NOTE]
> Unterstützende Technologien kündigen in der Regel nur _dynamische_ Änderungen im Inhalt eines Live-Bereichs an.
> Das Hinzufügen eines `aria-live`-Attributs oder einer spezialisierten Live-Bereichs-`Rolle` (wie [`role="status"`](/de/docs/Web/Accessibility/ARIA/Roles/status_role)) zu dem Element, bei dem Sie Änderungen ankündigen möchten, funktioniert, solange Sie das Attribut hinzufügen, bevor die Änderungen auftreten – entweder im ursprünglichen Markup oder dynamisch mithilfe von JavaScript. Beginnen Sie mit einem leeren Live-Bereich und ändern Sie dann – in einem separaten Schritt – den Inhalt innerhalb des Bereichs.
> Obwohl es nicht ausdrücklich in der Spezifikation dokumentiert ist, beinhalten Browser/unterstützende Technologien eine spezielle Behandlung für [`role="alert"`](/de/docs/Web/Accessibility/ARIA/Roles/alert_role): In den meisten Fällen werden die Inhalte innerhalb von `role="alert"`-Bereichen angekündigt, auch wenn der Bereich (der bereits die Benachrichtigung/Nachricht enthält) im ursprünglichen Markup der Seite vorhanden ist oder dynamisch in die Seite eingefügt wird. Beachten Sie jedoch, dass `role="alert"`-Bereiche – abhängig von der spezifischen Browser-/unterstützenden Technologie-Kombination – automatisch mit "Alert" vorangestellt werden, wenn sie angekündigt werden.

## Live-Bereiche

Dynamischer Inhalt, der sich ohne Neuladen der Seite aktualisiert, ist im Allgemeinen entweder ein Bereich oder ein Widget. Einfache Inhaltsänderungen, die nicht interaktiv sind, sollten als Live-Bereiche markiert sein. Ein Live-Bereich wird ausdrücklich mit dem `aria-live`-Attribut bezeichnet.

**`aria-live`**: Das `aria-live=POLITENESS_SETTING` wird verwendet, um die Priorität festzulegen, mit der der Screenreader Updates zu Live-Bereichen behandeln soll – die möglichen Einstellungen sind: `off`, `polite` oder `assertive`. Dieses Attribut ist bei weitem das wichtigste.

Normalerweise wird nur `aria-live="polite"` verwendet. Jeder Bereich, der Updates erhält, die für den Benutzer wichtig sind, jedoch nicht so schnell erfolgen, dass sie störend sind, sollte dieses Attribut erhalten. Der Screenreader wird Änderungen ankündigen, wenn der Benutzer inaktiv ist.

`aria-live="assertive"` sollte nur für zeitkritische/entscheidende Benachrichtigungen verwendet werden, die unbedingt die sofortige Aufmerksamkeit des Benutzers erfordern. Im Allgemeinen wird eine Änderung in einem assertiven Live-Bereich jede laufende Ankündigung eines Screenreaders unterbrechen. Daher kann es äußerst störend und unterbrechend sein und sollte nur sparsam eingesetzt werden.

Unkreativerweise bedeutet `aria-live="off"` nicht, dass Änderungen nicht angekündigt werden sollten. Wenn ein Element `aria-live="off"` (oder eine `Rolle` mit diesem impliziten Wert, wie `role="marquee"` oder `role="timer"`) hat, sollen Änderungen am Inhalt des Elements nur angekündigt werden, wenn der Fokus auf oder innerhalb des Elements liegt.

### Einfaches Beispiel: Dropdown-Box aktualisiert nützliche Bildschirminformationen

Eine Website, die sich auf planetare Informationen spezialisiert hat, bietet eine Dropdown-Box. Wenn ein Planet aus dem Dropdown ausgewählt wird, wird ein Bereich auf der Seite mit Informationen über den ausgewählten Planeten aktualisiert.

```html
<fieldset>
  <legend>Planeteninformation</legend>
  <label for="planetsSelect">Planet:</label>
  <select id="planetsSelect" aria-controls="planetInfo">
    <option value="">Einen Planeten auswählen…</option>
    <option value="mercury">Merkur</option>
    <option value="venus">Venus</option>
    <option value="earth">Erde</option>
    <option value="mars">Mars</option>
  </select>
  <button id="renderPlanetInfoButton">Los</button>
</fieldset>

<div role="region" id="planetInfo" aria-live="polite">
  <h2 id="planetTitle">Kein Planet ausgewählt</h2>
  <p id="planetDescription">Wählen Sie einen Planeten, um seine Beschreibung anzuzeigen</p>
</div>

<p>
  <small>
    Informationen von
    <a href="https://en.wikipedia.org/wiki/Solar_System">Wikipedia</a>
  </small>
</p>
```

```js
const PLANETS_INFO = {
  mercury: {
    title: "Merkur",
    description:
      "Merkur ist der kleinste und sonnennächste Planet im Sonnensystem. Er ist nach dem römischen Gott Merkur, dem Boten der Götter, benannt.",
  },

  venus: {
    title: "Venus",
    description:
      "Venus ist der zweite Planet von der Sonne. Er ist nach der römischen Göttin der Liebe und Schönheit benannt.",
  },

  earth: {
    title: "Erde",
    description:
      "Die Erde ist der dritte Planet von der Sonne und das einzige Objekt im Universum, von dem bekannt ist, dass es Leben beherbergt.",
  },

  mars: {
    title: "Mars",
    description:
      'Der Mars ist der vierte Planet von der Sonne und nach Merkur der zweitkleinste Planet im Sonnensystem. Auf Englisch trägt der Mars den Namen des römischen Kriegsgottes und wird oft als "roter Planet" bezeichnet.',
  },
};

function renderPlanetInfo(planet) {
  const planetTitle = document.querySelector("#planetTitle");
  const planetDescription = document.querySelector("#planetDescription");

  if (planet in PLANETS_INFO) {
    planetTitle.textContent = PLANETS_INFO[planet].title;
    planetDescription.textContent = PLANETS_INFO[planet].description;
  } else {
    planetTitle.textContent = "Kein Planet ausgewählt";
    planetDescription.textContent = "Wählen Sie einen Planeten, um seine Beschreibung anzuzeigen";
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

Wenn der Benutzer einen neuen Planeten auswählt, wird die Information im Live-Bereich angekündigt. Da der Live-Bereich `aria-live="polite"` hat, wartet der Screenreader, bis der Benutzer pausiert, bevor er die Aktualisierung ankündigt. So werden beim Durchschauen der Liste und der Auswahl eines anderen Planeten keine Updates im Live-Bereich angekündigt. Updates im Live-Bereich werden nur für den schließlich ausgewählten Planeten angekündigt.

Hier ist ein Screenshot von VoiceOver auf Mac, das die Aktualisierung (über Untertitel) im Live-Bereich ankündigt:

![Ein Screenshot von VoiceOver auf Mac, der die Aktualisierung eines Live-Bereichs ankündigt. Im Bild werden Untertitel angezeigt.](web_accessibility_aria_aria_live_regions.png)

## Rollen mit impliziten Live-Bereichs-Attributen

Elemente mit den folgenden [`role="…"`](/de/docs/Web/Accessibility/ARIA/Roles)-Werten fungieren standardmäßig als Live-Bereiche:

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
   <td>Chat, Fehler, Spiel oder ein anderes Protokoll</td>
   <td>Um die Kompatibilität zu maximieren, fügen Sie ein redundantes <code>aria-live="polite"</code> hinzu, wenn Sie diese Rolle verwenden.</td>
  </tr>
  <tr>
   <td>status</td>
   <td>Eine Statusleiste oder ein Bereich des Bildschirms, der einen aktualisierten Status irgendeiner Art bereitstellt. Screenreader-Benutzer haben einen speziellen Befehl, um den aktuellen Status zu lesen.</td>
   <td>Um die Kompatibilität zu maximieren, fügen Sie ein redundantes <code>aria-live="polite"</code> hinzu, wenn Sie diese Rolle verwenden.</td>
  </tr>
  <tr>
   <td>alert</td>
   <td>Fehler- oder Warnmeldung, die auf dem Bildschirm aufblitzt. Alarme sind besonders wichtig für clientseitige Validierungshinweise an Benutzer. <a href="https://www.w3.org/WAI/ARIA/apg/example-index/alert/alert.html" class="external" rel=" noopener">Beispiel für Alarme.</a></td>
   <td>Um die Kompatibilität zu maximieren, empfehlen einige Leute, ein redundantes <code>aria-live="assertive"</code> hinzuzufügen, wenn Sie diese Rolle verwenden. Da jedoch sowohl <code>aria-live</code> als auch <code>role="alert"</code> hinzugefügt werden, treten Probleme mit doppelter Ansage bei VoiceOver auf iOS auf.</td>
  </tr>
  <tr>
   <td>progressbar</td>
   <td>Eine Hybrid zwischen einem Widget und einem Live-Bereich. Verwenden Sie dies mit <code>aria-valuemin</code>, <code>aria-valuenow</code> und <code>aria-valuemax</code>. (TBD: Weitere Informationen hier hinzufügen).</td>
   <td></td>
  </tr>
  <tr>
   <td>marquee</td>
   <td>Text, der scrollt, wie ein Börsenticker.</td>
   <td></td>
  </tr>
  <tr>
   <td>timer</td>
   <td>Jede Art von Timer oder Uhr, wie ein Countdown-Timer oder Stoppuhr-Anzeige.</td>
   <td></td>
  </tr>
 </tbody>
</table>

## Zusätzliche Live-Bereichs-Attribute

Live-Bereiche sind gut unterstützt. Die Paciello Group hat 2014 [Informationen über den Stand der Unterstützung von Live-Bereichen](https://www.tpgi.com/screen-reader-support-aria-live-regions/) veröffentlicht. Paul J. Adam hat [die Unterstützung von `aria-atomic` und `aria-relevant`](https://pauljadam.com/demos/aria-atomic-relevant.html) im Besonderen untersucht.

1. **`aria-atomic`**: Das `aria-atomic=BOOLEAN` wird verwendet, um festzulegen, ob der Screenreader den Live-Bereich immer als Ganzes präsentieren soll, auch wenn sich nur ein Teil des Bereichs ändert. Die möglichen Einstellungen sind: `false` oder `true`. Die Standardeinstellung ist `false`.
2. [**`aria-relevant`**](/de/docs/Web/Accessibility/ARIA/Attributes/aria-relevant)

   : Das `aria-relevant=[LIST_OF_CHANGES]` wird verwendet, um festzulegen, welche Arten von Änderungen für einen Live-Bereich relevant sind. Die möglichen Einstellungen sind eine oder mehrere von: `additions`, `removals`, `text`, `all`. Die Standardeinstellung ist: `additions text`.

### Grundlegende Beispiele: `aria-atomic`

Als Veranschaulichung von `aria-atomic` betrachten Sie eine Website mit einer einfachen Uhr, die Stunden und Minuten anzeigt. Die Uhr wird jede Minute aktualisiert, wobei die neue verbleibende Zeit den aktuellen Inhalt überschreibt.

```html
<div id="clock" role="timer" aria-live="polite">
  <span id="clock-hours"></span>
  <span id="clock-mins"></span>
</div>
```

```js
/* grundlegendes JavaScript zum Aktualisieren der Uhr */
function updateClock() {
  const now = new Date();
  document.getElementById("clock-hours").textContent = now.getHours();
  document.getElementById("clock-mins").textContent =
    `0${now.getMinutes()}`.substr(-2);
}

/* erster Durchlauf */
updateClock();

/* jede Minute aktualisieren */
setInterval(updateClock, 60000);
```

Wenn die Funktion zum ersten Mal ausgeführt wird, wird die gesamte angefügte Zeichenkette angekündigt. Bei nachfolgenden Aufrufen werden nur die Teile des Inhalts angekündigt, die sich im Vergleich zum vorherigen Inhalt geändert haben. Zum Beispiel, wenn die Uhr von "17:33" auf "17:34" geändert wird, kündigen unterstützende Technologien nur "34" an, was für Benutzer nicht sehr nützlich sein wird.

Eine Möglichkeit, dies zu umgehen, wäre alle Inhalte des Live-Bereichs zuerst zu löschen (in diesem Fall das `innerHTML` sowohl von `<span id="clock-hours">` als auch `<span id="clock-mins">` leer setzen) und dann den neuen Inhalt einzufügen. Dies kann jedoch manchmal unzuverlässig sein, da es von der genauen Timing dieser beiden Updates abhängt.

`aria-atomic="true"` stellt sicher, dass jedes Mal, wenn der Live-Bereich aktualisiert wird, der gesamte Inhalt vollständig angekündigt wird (z.B. "17:34").

```html
<div id="clock" role="timer" aria-live="polite" aria-atomic="true">…</div>
```

Ein weiteres Beispiel für `aria-atomic` - ein Update/Benachrichtigung als Ergebnis einer Benutzeraktion.

```html
<div id="date-input">
  <label for="year">Jahr:</label>
  <input type="text" id="year" value="1990" onblur="change(event)" />
</div>

<div id="date-output" aria-atomic="true" aria-live="polite">
  Das eingestellte Jahr ist:
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

Mit `aria-relevant` können Sie angeben, welche Arten von Änderungen/Aktualisierungen eines Live-Bereichs angekündigt werden sollen.

Als Beispiel, betrachten Sie eine Chatseite, die eine Liste von Benutzern anzeigen möchte, die derzeit angemeldet sind. Anstatt nur die Benutzer anzukündigen, die derzeit angemeldet sind, möchten wir auch eine Ankündigung auslösen, wenn ein Benutzer _aus_ der Liste entfernt wird. Dies können wir erreichen, indem wir `aria-relevant="additions removals"` angeben.

```html
<ul id="roster" aria-live="polite" aria-relevant="additions removals">
  <!-- Verwenden Sie JavaScript, um Benutzer hier hinzuzufügen und zu entfernen -->
</ul>
```

Aufschlüsselung der ARIA Live-Eigenschaften:

- `aria-live="polite"` zeigt an, dass der Screenreader warten soll, bis der Benutzer inaktiv ist, bevor er Updates dem Benutzer präsentiert. Dies ist der am häufigsten verwendete Wert, da die Unterbrechung des Benutzers mit "assertive" dessen Fluss unterbrechen könnte.
- `aria-atomic` ist nicht gesetzt (`false` standardmäßig), sodass nur die hinzugefügten oder entfernten Benutzer gesprochen werden sollen, nicht die gesamte Liste jedes Mal.
- `aria-relevant="additions removals"` stellt sicher, dass sowohl hinzugefügte als auch entfernte Benutzer der Liste gesprochen werden.

## Siehe auch

- [ARIA-Rollen](/de/docs/Web/Accessibility/ARIA/Roles)
