---
title: Implementierung von Funktionsüberprüfung
short-title: Feature detection
slug: Learn_web_development/Extensions/Testing/Feature_detection
l10n:
  sourceCommit: 2d78abb3e793352e24e976ce0e68c08d817bd7f3
---

{{PreviousMenuNext("Learn_web_development/Extensions/Testing/HTML_and_CSS","Learn_web_development/Extensions/Testing/Automated_testing", "Learn_web_development/Extensions/Testing")}}

Funktionsüberprüfung bedeutet, herauszufinden, ob ein Browser einen bestimmten Codeblock unterstützt, und je nachdem, ob er das tut oder nicht, unterschiedlichen Code auszuführen, sodass der Browser immer ein funktionierendes Erlebnis bieten kann, anstatt in einigen Browsern abzustürzen/Fehler zu erzeugen. Dieser Artikel erläutert, wie Sie Ihre eigene einfache Funktionsüberprüfung schreiben können, wie Sie eine Bibliothek verwenden, um die Implementierung zu beschleunigen, sowie native Funktionen zur Funktionsüberprüfung wie `@supports`.

<table>
  <tbody>
    <tr>
      <th scope="row">Voraussetzungen:</th>
      <td>
        Vertrautheit mit den Kernsprachen <a href="/de/docs/Learn_web_development/Core/Structuring_content">HTML</a>,
        <a href="/de/docs/Learn_web_development/Core/Styling_basics">CSS</a> und
        <a href="/de/docs/Learn_web_development/Core/Scripting">JavaScript</a>; eine Vorstellung von den grundlegenden
        <a
          href="/de/docs/Learn_web_development/Extensions/Testing/Introduction"
          >Prinzipien des Cross-Browser-Tests</a
        >.
      </td>
    </tr>
    <tr>
      <th scope="row">Ziel:</th>
      <td>
        Zu verstehen, was das Konzept der Funktionsüberprüfung ist, und in der Lage zu sein,
        geeignete Lösungen in CSS und JavaScript zu implementieren.
      </td>
    </tr>
  </tbody>
</table>

## Das Konzept der Funktionsüberprüfung

Die Idee hinter der Funktionsüberprüfung ist, dass Sie einen Test ausführen können, um festzustellen, ob eine Funktion im aktuellen Browser unterstützt wird, und dann bedingt Code ausführen können, um sowohl in Browsern, die die Funktion _unterstützen_, als auch in Browsern, die das _nicht_ tun, ein akzeptables Erlebnis zu bieten. Wenn Sie dies nicht tun, können Browser, die die Funktionen, die Sie in Ihrem Code verwenden, nicht unterstützen, Ihre Websites möglicherweise nicht richtig anzeigen oder ganz scheitern, was ein schlechtes Benutzererlebnis erzeugt.

Lassen Sie uns rekapitulieren und uns das Beispiel anschauen, das wir in unserem Artikel [JavaScript-Debugging und Fehlerbehandlung](/de/docs/Learn_web_development/Core/Scripting/Debugging_JavaScript#feature_detection) behandelt haben — die [Geolocation API](/de/docs/Web/API/Geolocation_API) (die verfügbare Standortdaten für das Gerät bereitstellt, auf dem der Webbrowser läuft) hat den Haupteinstiegspunkt für ihre Nutzung, eine `geolocation`-Eigenschaft, die im globalen [Navigator](/de/docs/Web/API/Navigator)-Objekt verfügbar ist. Daher können Sie feststellen, ob der Browser Geolokalisierung unterstützt oder nicht, indem Sie etwas wie das Folgende verwenden:

```js
if ("geolocation" in navigator) {
  navigator.geolocation.getCurrentPosition((position) => {
    // show the location on a map, such as the Google Maps API
  });
} else {
  // Give the user a choice of static maps
}
```

Bevor wir fortfahren, möchten wir eines vorab sagen — verwechseln Sie Funktionsüberprüfung nicht mit dem **Browser-Sniffing** (der Erkennung, welcher spezifische Browser auf die Seite zugreift) — dies ist eine schreckliche Praxis, die unter allen Umständen vermieden werden sollte. Siehe [Browsererkennung mit der User-Agent-Zeichenkette (UA-Sniffing)](/de/docs/Web/HTTP/Guides/Browser_detection_using_the_user_agent) für weitere Details.

## Eigene Funktionsüberprüfungstests schreiben

In diesem Abschnitt schauen wir uns an, wie Sie Ihre eigenen Funktionsüberprüfungstests sowohl in CSS als auch in JavaScript implementieren können.

### CSS

Sie können Tests für CSS-Funktionen schreiben, indem Sie in JavaScript auf das Vorhandensein von _[element.style.property](/de/docs/Web/API/HTMLElement/style)_ (z.B. `paragraph.style.rotate`) testen.

Ein klassisches Beispiel könnte sein, die Unterstützung von [Subgrid](/de/docs/Web/CSS/CSS_grid_layout/Subgrid) in einem Browser zu testen; für Browser, die den `subgrid`-Wert für einen Subgrid-Wert für [`grid-template-columns`](/de/docs/Web/CSS/Reference/Properties/grid-template-columns) und [`grid-template-rows`](/de/docs/Web/CSS/Reference/Properties/grid-template-rows) unterstützen, können wir Subgrid in unserem Layout verwenden. Für Browser, die das nicht tun, könnten wir ein reguläres Gitter verwenden, das gut funktioniert, aber nicht so cool aussieht.

Unter Verwendung dieses Beispiels könnten wir ein Subgrid-Stylesheet einbinden, wenn der Wert unterstützt wird, und ein reguläres Gitter-Stylesheet, wenn nicht. Dazu könnten wir zwei Stylesheets im Kopf unserer HTML-Datei einbinden: eines für alle Styles und eines, das das Standardlayout implementiert, wenn Subgrid nicht unterstützt wird:

```html
<link href="basic-styling.css" rel="stylesheet" />
<link class="conditional" href="grid-layout.css" rel="stylesheet" />
```

Hier kümmert sich `basic-styling.css` um das gesamte Styling, das wir jedem Browser geben möchten. Wir haben zwei zusätzliche CSS-Dateien, `grid-layout.css` und `subgrid-layout.css`, die das CSS enthalten, das wir je nach ihrer Unterstützung für Browser selektiv anwenden möchten.

Wir verwenden JavaScript, um die Unterstützung für den Subgrid-Wert zu testen, und aktualisieren dann das `href` unseres bedingten Stylesheets basierend auf der Browserunterstützung.

Wir können ein `<script></script>` in unser Dokument einfügen, gefüllt mit dem folgenden JavaScript

```js
const conditional = document.querySelector(".conditional");
if (CSS.supports("grid-template-columns", "subgrid")) {
  conditional.setAttribute("href", "subgrid-layout.css");
}
```

In unserer bedingten Anweisung testen wir, ob die {{cssxref("grid-template-columns")}} Eigenschaft den `subgrid`-Wert mit [`CSS.supports()`](/de/docs/Web/API/CSS/supports_static) unterstützt.

#### @supports

CSS hat einen nativen Mechanismus zur Funktionsüberprüfung: die {{cssxref("@supports")}}-Regel. Diese funktioniert ähnlich wie [Media Queries](/de/docs/Web/CSS/CSS_media_queries), außer dass sie CSS je nach Unterstützung einer CSS-Funktion selektiv anwendet, ähnlich wie `CSS.supports()`, anstatt CSS je nach einer Mediafunktion wie Auflösung, Bildschirmbreite oder {{Glossary("aspect_ratio", "Seitenverhältnis")}} selektiv anzuwenden.

Zum Beispiel könnten wir unser vorheriges Beispiel umschreiben, um `@supports` zu verwenden:

```css
@supports (grid-template-columns: subgrid) {
  main {
    display: grid;
    grid-template-columns: repeat(9, 1fr);
    grid-template-rows: repeat(4, minmax(100px, auto));
  }

  .item {
    display: grid;
    grid-column: 2 / 7;
    grid-row: 2 / 4;
    grid-template-columns: subgrid;
    grid-template-rows: repeat(3, 80px);
  }

  .subitem {
    grid-column: 3 / 6;
    grid-row: 1 / 3;
  }
}
```

Dieser Regelblock wendet die CSS-Regel innerhalb nur an, wenn der aktuelle Browser die `grid-template-columns: subgrid;`-Deklaration unterstützt. Damit eine Bedingung mit einem Wert funktioniert, müssen Sie eine vollständige Deklaration einschließen (nicht nur einen Eigenschaftsnamen) und das Semikolon am Ende NICHT einschließen.

`@supports` bietet auch die Logik `AND`, `OR` und `NOT` an — der andere Block wendet das reguläre Gitterlayout an, wenn die Subgrid-Option nicht verfügbar ist:

```css
@supports not (grid-template-columns: subgrid) {
  /* rules in here */
}
```

Dies ist bequemer als das vorherige Beispiel — wir können unsere gesamte Funktionsüberprüfung in CSS machen, kein JavaScript erforderlich, und wir können die gesamte Logik in einer einzigen CSS-Datei behandeln, wodurch HTTP-Anfragen reduziert werden. Aus diesem Grund ist es die bevorzugte Methode zur Bestimmung der Browserunterstützung für CSS-Funktionen.

### JavaScript

Wir haben bereits früher ein Beispiel für einen JavaScript-Funktionsüberprüfungstest gesehen. Im Allgemeinen werden solche Tests über eines von wenigen allgemeinen Mustern durchgeführt.

Allgemeine Muster für erkennbare Funktionen umfassen:

- Mitglieder eines Objekts
  - : Prüfen Sie, ob eine bestimmte Methode oder Eigenschaft (typischerweise ein Einstiegspunkt in die Nutzung der API oder einer anderen Funktion, die Sie erkennen möchten) in ihrem übergeordneten `Object` existiert.

    Unser früheres Beispiel verwendete dieses Muster, um die [Geolocation](/de/docs/Web/API/Geolocation_API)-Unterstützung zu erkennen, indem das [`navigator`](/de/docs/Web/API/Navigator)-Objekt auf ein `geolocation`-Mitglied getestet wurde:

    ```js
    if ("geolocation" in navigator) {
      // Access navigator.geolocation APIs
    }
    ```

- Eigenschaften eines Elements
  - : Erstellen Sie ein Element im Speicher mit [`Document.createElement()`](/de/docs/Web/API/Document/createElement) und prüfen Sie dann, ob eine Eigenschaft darauf existiert.

    Dieses Beispiel zeigt eine Möglichkeit, die Unterstützung der [Canvas API](/de/docs/Web/API/Canvas_API) zu erkennen:

    ```js
    function supports_canvas() {
      return !!document.createElement("canvas").getContext;
    }

    if (supports_canvas()) {
      // Create and draw on canvas elements
    }
    ```

    > [!NOTE]
    > Das doppelte `NOT` im obigen Beispiel (`!!`) ist eine Möglichkeit, einen Rückgabewert in einen "richtigen" booleschen Wert zu zwingen, anstatt einen {{Glossary("Truthy", "Truthy")}}/{{Glossary("Falsy", "Falsy")}} Wert, der die Ergebnisse verfälschen könnte.

- Spezifische Rückgabewerte einer Methode auf einem Element
  - : Erstellen Sie ein Element im Speicher mit [`Document.createElement()`](/de/docs/Web/API/Document/createElement) und prüfen Sie dann, ob eine Methode darauf existiert. Wenn ja, prüfen Sie, welchen Wert sie zurückgibt.

- Beibehaltung eines zugewiesenen Eigenschaftswerts durch ein Element
  - : Erstellen Sie ein Element im Speicher mit [`Document.createElement()`](/de/docs/Web/API/Document/createElement), setzen Sie eine Eigenschaft auf einen bestimmten Wert und prüfen Sie dann, ob der Wert beibehalten wird.

Beachten Sie, dass einige Funktionen jedoch als nicht erkennbar bekannt sind. In diesen Fällen müssen Sie einen anderen Ansatz verwenden, wie etwa ein {{Glossary("Polyfill", "Polyfill")}}.

#### matchMedia

Wir wollten auch auf die JavaScript-Funktion [`Window.matchMedia`](/de/docs/Web/API/Window/matchMedia) an dieser Stelle hinweisen. Dies ist eine Eigenschaft, die es Ihnen ermöglicht, Media Query-Tests innerhalb von JavaScript durchzuführen. Sie sieht folgendermaßen aus:

```js
if (window.matchMedia("(width <= 480px)").matches) {
  // run JavaScript in here.
}
```

Als Beispiel verwendet unser [Snapshot](https://github.com/chrisdavidmills/snapshot) Demo diese Funktion, um selektiv die Brick-JavaScript-Bibliothek anzuwenden und diese zur Verwaltung des UI-Layouts zu verwenden, aber nur für das kleine Bildschirm-Layout (480px breit oder weniger). Wir verwenden zuerst das `media` Attribut, um das Brick-CSS nur dann auf die Seite anzuwenden, wenn die Seitenbreite 480px oder weniger beträgt:

```html
<link href="dist/brick.css" rel="stylesheet" media="(width <= 480px)" />
```

Wir verwenden dann `matchMedia()` im JavaScript mehrmals, um Brick-Navigationsfunktionen nur dann auszuführen, wenn wir im kleinen Bildschirm-Layout sind (in breiteren Bildschirm-Layouts, in denen alles auf einmal gesehen werden kann, müssen wir nicht zwischen verschiedenen Ansichten navigieren).

```js
if (window.matchMedia("(width <= 480px)").matches) {
  deck.shuffleTo(1);
}
```

## Zusammenfassung

Dieser Artikel behandelte die Funktionsüberprüfung in einem angemessenen Detailgrad, ging durch die Hauptkonzepte und zeigte Ihnen, wie Sie Ihre eigenen Funktionsüberprüfungstests implementieren können.

Als nächstes werden wir uns mit automatisierten Tests befassen.

{{PreviousMenuNext("Learn_web_development/Extensions/Testing/HTML_and_CSS","Learn_web_development/Extensions/Testing/Automated_testing", "Learn_web_development/Extensions/Testing")}}
