---
title: ARIA live regions
slug: Web/Accessibility/ARIA/Guides/Live_regions
l10n:
  sourceCommit: fc52eb81b630ca02c16addc346924295bdb5aaa8
---

Mit JavaScript ist es möglich, Teile einer Seite dynamisch zu ändern, ohne dass die gesamte Seite neu geladen werden muss – zum Beispiel, um eine Liste mit Suchergebnissen sofort zu aktualisieren oder einen diskreten Alarm oder eine Benachrichtigung anzuzeigen, die keine Interaktion des Benutzers erfordert. Während diese Änderungen für Benutzer, die die Seite sehen können, in der Regel visuell deutlich erkennbar sind, sind sie möglicherweise nicht offensichtlich für Benutzer von unterstützenden Technologien. ARIA-live-Bereiche schließen diese Lücke und bieten eine Möglichkeit, dynamische Inhaltsänderungen programmatisch auf eine Weise offenzulegen, die von unterstützenden Technologien angesagt werden kann.

> [!NOTE]
> Unterstützende Technologien kündigen im Allgemeinen nur _dynamische_ Änderungen des Inhalts eines Live-Bereichs an.
> Das Hinzufügen eines `aria-live`-Attributs oder einer spezialisierten Live-Bereichsrolle (wie [`role="status"`](/de/docs/Web/Accessibility/ARIA/Reference/Roles/status_role)) zu dem Element, dessen Änderungen Sie ankündigen möchten, funktioniert, solange Sie das Attribut hinzufügen, bevor die Änderungen auftreten – entweder im ursprünglichen Markup oder dynamisch mit JavaScript. Beginnen Sie mit einem leeren Live-Bereich und ändern Sie dann – in einem separaten Schritt – den Inhalt innerhalb des Bereichs.
> Zwar nicht explizit in der Spezifikation dokumentiert, enthalten Browser/unterstützende Technologien dennoch eine spezielle Handhabung für [`role="alert"`](/de/docs/Web/Accessibility/ARIA/Reference/Roles/alert_role): In den meisten Fällen wird der Inhalt innerhalb von `role="alert"`-Bereichen angesagt, selbst wenn der Bereich (der bereits die Benachrichtigung/Meldung enthält) im ursprünglichen Markup der Seite vorhanden ist oder dynamisch in die Seite eingefügt wird. Beachten Sie jedoch, dass `role="alert"`-Bereiche je nach der spezifischen Kombination aus Browser/unterstützender Technologie automatisch mit "Alert" vorangestellt werden, wenn sie angesagt werden.

## Live-Bereiche

Dynamischer Inhalt, der sich ohne ein Neuladen der Seite aktualisiert, ist in der Regel entweder ein Bereich oder ein Widget. Einfache Inhaltsänderungen, die nicht interaktiv sind, sollten als Live-Bereiche gekennzeichnet werden. Ein Live-Bereich wird explizit mit dem `aria-live`-Attribut gekennzeichnet.

**`aria-live`**: Das `aria-live=POLITENESS_SETTING` wird verwendet, um die Priorität festzulegen, mit der ein Bildschirmleser Aktualisierungen in Live-Bereichen behandeln sollte – die möglichen Einstellungen sind: `off`, `polite` oder `assertive`. Dieses Attribut ist bei weitem das wichtigste.

Normalerweise wird nur `aria-live="polite"` verwendet. Jeder Bereich, der Aktualisierungen erhält, die für den Benutzer wichtig sind, aber nicht so schnell, dass sie störend sind, sollte dieses Attribut erhalten. Der Bildschirmleser spricht Änderungen an, wenn der Benutzer Pause macht.

`aria-live="assertive"` sollte nur für zeitkritische/entscheidende Benachrichtigungen verwendet werden, die unbedingt die sofortige Aufmerksamkeit des Benutzers erfordern. Im Allgemeinen unterbricht eine Änderung eines assertiven Live-Bereichs jede Ansage, die ein Bildschirmleser gerade macht. Daher kann es extrem störend und ärgerlich sein und sollte nur sparsam verwendet werden.

Unintuitiv bedeutet `aria-live="off"` nicht, dass Änderungen nicht angekündigt werden sollten. Wenn ein Element `aria-live="off"` hat (oder eine `role` mit diesem impliziten Wert, wie `role="marquee"` oder `role="timer"`), sollten Änderungen am Inhalt des Elements nur angekündigt werden, wenn der Fokus auf dem oder im Inneren des Elements liegt.

### Einfaches Beispiel: Dropdown-Box aktualisiert nützliche Bildschirminformationen

Eine Website, die sich darauf spezialisiert hat, Informationen über Planeten bereitzustellen, bietet eine Dropdown-Box an. Wenn ein Planet aus dem Dropdown-Menü ausgewählt wird, wird ein Bereich auf der Seite mit Informationen über den ausgewählten Planeten aktualisiert.

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

Wenn der Benutzer einen neuen Planeten auswählt, werden die Informationen im Live-Bereich angesagt. Da der Live-Bereich `aria-live="polite"` hat, wartet der Bildschirmleser, bis der Benutzer Pause macht, bevor die Aktualisierung angesagt wird. Daher wird das Weiterbewegen in der Liste und das Auswählen eines anderen Planeten keine Aktualisierungen im Live-Bereich ankündigen. Aktualisierungen im Live-Bereich werden nur für den schließlich gewählten Planeten angesagt.

Hier ist ein Screenshot von VoiceOver auf Mac, der die Aktualisierung (über Untertitel) des Live-Bereichs ankündigt:

![Ein Screenshot von VoiceOver auf Mac, der die Aktualisierung eines Live-Bereichs ankündigt. Untertitel sind im Bild zu sehen.](web_accessibility_aria_aria_live_regions.png)

## Rollen mit impliziten Live-Bereichs-Attributen

Elemente mit den folgenden [`role="…"`](/de/docs/Web/Accessibility/ARIA/Reference/Roles)-Werten fungieren standardmäßig als Live-Bereiche:

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
   <td>Protokolle wie Chat, Fehler, Spiel oder eine andere Art von Log</td>
   <td>Um die Kompatibilität zu maximieren, fügen Sie ein redundantes <code>aria-live="polite"</code> hinzu, wenn Sie diese Rolle verwenden.</td>
  </tr>
  <tr>
   <td>status</td>
   <td>Eine Statusleiste oder ein Bereich des Bildschirms, der einen aktualisierten Status irgendeiner Art liefert. Benutzer von Bildschirmlesern haben einen speziellen Befehl, um den aktuellen Status zu lesen.</td>
   <td>Um die Kompatibilität zu maximieren, fügen Sie ein redundantes <code>aria-live="polite"</code> hinzu, wenn Sie diese Rolle verwenden.</td>
  </tr>
  <tr>
   <td>alert</td>
   <td>Fehler- oder Warnmeldung, die auf dem Bildschirm blinkt. Warnungen sind besonders wichtig für Meldungen zur Client-seitigen Validierung für Benutzer. <a href="https://www.w3.org/WAI/ARIA/apg/example-index/alert/alert.html" class="external" rel="noopener">Warnungsbeispiel.</a></td>
   <td>Um die Kompatibilität zu maximieren, empfehlen einige, ein redundantes <code>aria-live="assertive"</code> hinzuzufügen, wenn Sie diese Rolle verwenden. Das Hinzufügen von sowohl <code>aria-live</code> als auch <code>role="alert"</code> verursacht jedoch Doppelausgabeprobleme bei VoiceOver auf iOS.</td>
  </tr>
  <tr>
   <td>progressbar</td>
   <td>Eine Mischung zwischen einem Widget und einem Live-Bereich. Verwenden Sie dies mit <code>aria-valuemin</code>, <code>aria-valuenow</code> und <code>aria-valuemax</code>. (TBD: Mehr Informationen hier hinzufügen).</td>
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

## Zusätzliche Live-Bereichsattribute

Live-Bereiche sind gut unterstützt. Die Paciello Group veröffentlichte 2014 [Informationen über den Zustand der Unterstützung von Live-Bereichen](https://www.tpgi.com/screen-reader-support-aria-live-regions/). Paul J. Adam hat speziell [die Unterstützung von `aria-atomic` und `aria-relevant`](https://pauljadam.com/demos/aria-atomic-relevant.html) untersucht.

1. **`aria-atomic`**: Das `aria-atomic=BOOLEAN` wird verwendet, um festzulegen, ob der Bildschirmleser den Live-Bereich stets als Ganzes präsentieren soll, auch wenn nur ein Teil des Bereichs geändert wird. Die möglichen Einstellungen sind: `false` oder `true`. Die Standardeinstellung ist `false`.
2. [**`aria-relevant`**](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-relevant)

   : Das `aria-relevant=[LIST_OF_CHANGES]` wird verwendet, um festzulegen, welche Arten von Änderungen für einen Live-Bereich relevant sind. Die möglichen Einstellungen sind eine oder mehrere der folgenden: `additions`, `removals`, `text`, `all`. Die Standardeinstellung ist: `additions text`.

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

Beim ersten Ausführen der Funktion wird der gesamte hinzugefügte String angekündigt. Bei nachfolgenden Aufrufen werden nur die Teile des Inhalts angekündigt, die im Vergleich zum vorherigen Inhalt geändert wurden. Wenn beispielsweise die Uhr von „17:33“ auf „17:34“ umspringt, wird von unterstützenden Technologien nur „34“ angesagt, was für Benutzer nicht sehr hilfreich ist.

Ein Weg, dies zu umgehen, wäre, zunächst den gesamten Inhalt des Live-Bereichs zu löschen (in diesem Fall das `innerHTML` von sowohl `<span id="clock-hours">` als auch `<span id="clock-mins">` auf leer setzen) und dann den neuen Inhalt einzufügen. Dies kann jedoch manchmal unzuverlässig sein, da es von der genauen Timing dieser beiden Updates abhängt.

`aria-atomic="true"` stellt sicher, dass jedes Mal, wenn der Live-Bereich aktualisiert wird, der gesamte Inhalt vollständig angesagt wird (z. B. „17:34“).

```html
<div id="clock" role="timer" aria-live="polite" aria-atomic="true">…</div>
```

Ein weiteres Beispiel für `aria-atomic` - eine Aktualisierung/Benachrichtigung, die aufgrund einer Benutzeraktion erfolgt.

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

Ohne `aria-atomic="true"` kündigt der Bildschirmleser nur den geänderten Wert des Jahres an. Mit `aria-atomic="true"` verkündet der Bildschirmleser „Das gesetzte Jahr ist: _geänderter Wert_“

### Grundlegendes Beispiel: `aria-relevant`

Mit `aria-relevant` können Sie angeben, welche Arten von Änderungen/Aktualisierungen an einem Live-Bereich angesagt werden sollen.

Als Beispiel betrachten wir eine Chat-Seite, die eine Liste der derzeit eingelogger Nutzer anzeigen möchte. Anstatt nur die gerade eingeloggten Nutzer anzukündigen, wollen wir auch eine Ansage auslösen, wenn ein Benutzer _aus_ der Liste entfernt wird. Wir können dies erreichen, indem wir `aria-relevant="additions removals"` festlegen.

```html
<ul id="roster" aria-live="polite" aria-relevant="additions removals">
  <!-- use JavaScript to add and remove users here -->
</ul>
```

Zusammenfassung der ARIA-Live-Eigenschaften:

- `aria-live="polite"` gibt an, dass der Bildschirmleser warten soll, bis der Benutzer inaktiv ist, bevor er Aktualisierungen präsentiert. Dies ist der am häufigsten verwendete Wert, da das Unterbrechen des Benutzers mit „assertive“ den Fluss unterbrechen könnte.
- `aria-atomic` ist nicht gesetzt (Standardwert ist `false`), sodass nur hinzugefügte oder entfernte Benutzer angesagt werden und nicht jedes Mal die gesamte Liste.
- `aria-relevant="additions removals"` stellt sicher, dass sowohl hinzugefügte als auch entfernte Benutzer in der Liste angesagt werden.

## Siehe auch

- [ARIA-Rollen](/de/docs/Web/Accessibility/ARIA/Reference/Roles)
