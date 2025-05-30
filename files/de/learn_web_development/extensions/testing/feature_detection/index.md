---
title: Implementieren von Funktionsdetektion
short-title: Feature detection
slug: Learn_web_development/Extensions/Testing/Feature_detection
l10n:
  sourceCommit: 14acf1aa7885157debdf1b6111f4bd10c064ec60
---

{{PreviousMenuNext("Learn_web_development/Extensions/Testing/HTML_and_CSS", "Learn_web_development/Extensions/Testing/Automated_testing", "Learn_web_development/Extensions/Testing")}}

Funktionsdetektion beinhaltet das Herausfinden, ob ein Browser einen bestimmten Codeblock unterstützt, und das Ausführen von unterschiedlichem Code, je nachdem, ob er es tut (oder nicht), damit der Browser immer ein funktionierendes Erlebnis bieten kann, anstatt in einigen Browsern abzustürzen oder Fehler zu erzeugen. Dieser Artikel beschreibt, wie Sie Ihre eigene einfache Funktionsdetektion schreiben, wie Sie eine Bibliothek verwenden, um die Implementierung zu beschleunigen, und native Funktionen für die Funktionsdetektion wie `@supports`.

<table>
  <tbody>
    <tr>
      <th scope="row">Voraussetzungen:</th>
      <td>
        Vertrautheit mit den Kernsprachen <a href="/de/docs/Learn_web_development/Core/Structuring_content">HTML</a>,
        <a href="/de/docs/Learn_web_development/Core/Styling_basics">CSS</a> und
        <a href="/de/docs/Learn_web_development/Core/Scripting">JavaScript</a>; eine Idee von den grundlegenden
        <a
          href="/de/docs/Learn_web_development/Extensions/Testing/Introduction"
          >Prinzipien des Cross-Browser-Tests</a
        >.
      </td>
    </tr>
    <tr>
      <th scope="row">Ziel:</th>
      <td>
        Verstehen, was das Konzept der Funktionsdetektion ist, und in der Lage sein, geeignete Lösungen in CSS und JavaScript zu implementieren.
      </td>
    </tr>
  </tbody>
</table>

## Das Konzept der Funktionsdetektion

Die Idee hinter der Funktionsdetektion ist, dass Sie einen Test durchführen können, um festzustellen, ob eine Funktion im aktuellen Browser unterstützt wird, und dann bedingt Code ausführen, um sowohl in Browsern, die die Funktion _unterstützen_, als auch in solchen, die _nicht_ unterstützen, ein akzeptables Erlebnis zu bieten. Wenn Sie dies nicht tun, können Browser, die die Funktionen, die Sie in Ihrem Code verwenden, nicht unterstützen, Ihre Seiten möglicherweise nicht richtig anzeigen oder sogar ganz abstürzen, was eine schlechte Benutzererfahrung schafft.

Lassen Sie uns das Beispiel, das wir in unserem Artikel über [JavaScript-Debugging und Fehlerbehandlung](/de/docs/Learn_web_development/Core/Scripting/Debugging_JavaScript#feature_detection) angesprochen haben, noch einmal rekapitulieren — die [Geolocation-API](/de/docs/Web/API/Geolocation_API) (die die verfügbaren Standortdaten für das Gerät, auf dem der Webbrowser läuft, bereitstellt) hat den Haupteinstiegspunkt für ihre Nutzung, eine `geolocation`-Eigenschaft, die im globalen [Navigator](/de/docs/Web/API/Navigator)-Objekt verfügbar ist. Daher können Sie erkennen, ob der Browser die Geolokalisierung unterstützt oder nicht, indem Sie so etwas verwenden:

```js
if ("geolocation" in navigator) {
  navigator.geolocation.getCurrentPosition((position) => {
    // show the location on a map, such as the Google Maps API
  });
} else {
  // Give the user a choice of static maps
}
```

Bevor wir fortfahren, möchten wir eine Sache im Voraus sagen — verwechseln Sie Funktionsdetektion nicht mit **Browsererkennung** (Erkennen welcher spezifische Browser auf die Seite zugreift) — dies ist eine schlechte Praxis, die unter allen Umständen vermieden werden sollte. Siehe [Browsererkennung mit dem User-Agent-String (UA-Sniffing)](/de/docs/Web/HTTP/Guides/Browser_detection_using_the_user_agent) für weitere Details.

## Schreiben Ihrer eigenen Funktionsdetektionstests

In diesem Abschnitt werden wir uns damit befassen, wie Sie Ihre eigenen Funktionsdetektionstests sowohl in CSS als auch in JavaScript implementieren können.

### CSS

Sie können Tests für CSS-Funktionen schreiben, indem Sie die Existenz von _[element.style.property](/de/docs/Web/API/HTMLElement/style)_ (z. B. `paragraph.style.rotate`) in JavaScript testen.

Ein klassisches Beispiel könnte darin bestehen, die Unterstützung für [Subgrid](/de/docs/Web/CSS/CSS_grid_layout/Subgrid) in einem Browser zu testen; für Browser, die den `subgrid`-Wert für einen Subgrid-Wert für [`grid-template-columns`](/de/docs/Web/CSS/grid-template-columns) und [`grid-template-rows`](/de/docs/Web/CSS/grid-template-rows) unterstützen, können wir Subgrid in unserem Layout verwenden. Für Browser, die dies nicht unterstützen, könnten wir ein reguläres Gitter verwenden, das gut funktioniert, aber nicht so cool aussieht.

Verwenden wir dies als Beispiel, könnten wir ein Subgrid-Stylesheet einbinden, wenn der Wert unterstützt wird, und ein reguläres Gitter-Stylesheet, wenn nicht. Um dies zu tun, könnten wir zwei Stylesheets in den Kopf unserer HTML-Datei einbinden: eines für das gesamte Styling und eines, das das Standardlayout implementiert, wenn Subgrid nicht unterstützt wird:

```html
<link href="basic-styling.css" rel="stylesheet" />
<link class="conditional" href="grid-layout.css" rel="stylesheet" />
```

Hier behandelt `basic-styling.css` das gesamte Styling, das wir jedem Browser geben möchten. Wir haben zwei zusätzliche CSS-Dateien, `grid-layout.css` und `subgrid-layout.css`, die das CSS enthalten, das wir selektiv auf Browser anwenden möchten, je nach ihren Unterstützungsstufen.

Wir verwenden JavaScript, um die Unterstützung für den subgrid-Wert zu testen und dann das `href` unseres bedingten Stylesheets basierend auf dem Browser-Support zu aktualisieren.

Wir können ein `<script></script>` zu unserem Dokument hinzufügen, das mit dem folgenden JavaScript gefüllt ist

```js
const conditional = document.querySelector(".conditional");
if (CSS.supports("grid-template-columns", "subgrid")) {
  conditional.setAttribute("href", "subgrid-layout.css");
}
```

In unserer bedingten Anweisung testen wir, ob die {{cssxref("grid-template-columns")}}-Eigenschaft den `subgrid`-Wert mithilfe von [`CSS.supports()`](/de/docs/Web/API/CSS/supports_static) unterstützt.

#### @supports

CSS hat einen nativen Mechanismus zur Funktionsdetektion: die {{cssxref("@supports")}}-Regel. Diese funktioniert ähnlich wie [Media Queries](/de/docs/Web/CSS/CSS_media_queries), außer dass sie CSS selektiv anwendet, basierend auf einer CSS-Funktion, anstatt auf einer Medienfunktion wie einer Auflösung, Bildschirmbreite oder einem {{Glossary("aspect_ratio", "Seitenverhältnis")}}, ähnlich wie `CSS.supports()`.

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

Dieser Regelblock wendet die CSS-Regel nur an, wenn der aktuelle Browser die `grid-template-columns: subgrid;`-Deklaration unterstützt. Damit eine Bedingung mit einem Wert funktioniert, müssen Sie eine vollständige Deklaration (nicht nur einen Eigenschaftsnamen) einschließen und KEIN Semikolon am Ende.

`@supports` hat auch `AND`, `OR` und `NOT` Logik verfügbar — der andere Block wendet das reguläre Grid-Layout an, wenn die Subgrid-Option nicht verfügbar ist:

```css
@supports not (grid-template-columns: subgrid) {
  /* rules in here */
}
```

Das ist bequemer als das vorherige Beispiel — wir können unsere gesamte Funktionsdetektion in CSS durchführen, kein JavaScript erforderlich, und wir können die gesamte Logik in einer einzigen CSS-Datei handhaben, was HTTP-Anfragen reduziert. Aus diesem Grund ist es die bevorzugte Methode zur Bestimmung der Browserunterstützung für CSS-Funktionen.

### JavaScript

Wir haben bereits ein Beispiel für einen JavaScript-Funktionsdetektionstest gesehen. Im Allgemeinen werden solche Tests nach einem der wenigen gängigen Muster durchgeführt.

Gängige Muster für erkennbare Funktionen sind:

- Mitglieder eines Objekts

  - : Prüfen Sie, ob eine bestimmte Methode oder Eigenschaft (typischerweise ein Einstiegspunkt in die Nutzung der API oder einer anderen Funktion, die Sie erkennen) in ihrem Eltern-`Object` existiert.

    Unser früheres Beispiel verwendete dieses Muster, um die [Geolokalisierung](/de/docs/Web/API/Geolocation_API)-Unterstützung zu erkennen, indem es das [`navigator`](/de/docs/Web/API/Navigator)-Objekt auf ein `geolocation`-Mitglied überprüfte:

    ```js
    if ("geolocation" in navigator) {
      // Access navigator.geolocation APIs
    }
    ```

- Eigenschaften eines Elements

  - : Erstellen Sie ein Element im Arbeitsspeicher mit [`Document.createElement()`](/de/docs/Web/API/Document/createElement) und prüfen Sie dann, ob eine Eigenschaft daran existiert.

    Dieses Beispiel zeigt eine Möglichkeit, die Unterstützung für die [Canvas-API](/de/docs/Web/API/Canvas_API) zu erkennen:

    ```js
    function supports_canvas() {
      return !!document.createElement("canvas").getContext;
    }

    if (supports_canvas()) {
      // Create and draw on canvas elements
    }
    ```

    > [!NOTE]
    > Der doppelte `NOT` im obigen Beispiel (`!!`) ist eine Möglichkeit, einen Rückgabewert dazu zu zwingen, ein "richtiges" boolesches Wert zu werden, anstatt eines {{Glossary("Truthy", "Truthy")}}/{{Glossary("Falsy", "Falsy")}}-Wertes, der die Ergebnisse verfälschen könnte.

- Spezifische Rückgabewerte einer Methode auf einem Element

  - : Erstellen Sie ein Element im Arbeitsspeicher mit [`Document.createElement()`](/de/docs/Web/API/Document/createElement) und prüfen Sie dann, ob eine Methode darauf existiert. Wenn ja, prüfen Sie, welchen Wert sie zurückgibt.

- Beibehaltung eines zugewiesenen Eigenschaftswerts durch ein Element

  - : Erstellen Sie ein Element im Arbeitsspeicher mit [`Document.createElement()`](/de/docs/Web/API/Document/createElement), setzen Sie eine Eigenschaft auf einen bestimmten Wert und prüfen Sie dann, ob der Wert beibehalten wird.

Beachten Sie, dass einige Funktionen jedoch dafür bekannt sind, nicht zu erkennen zu sein. In diesen Fällen müssen Sie einen anderen Ansatz verwenden, wie beispielsweise ein {{Glossary("Polyfill", "Polyfill")}}.

#### matchMedia

Wir wollten an dieser Stelle auch die JavaScript-Funktion [`Window.matchMedia`](/de/docs/Web/API/Window/matchMedia) erwähnen. Dies ist eine Eigenschaft, die es Ihnen ermöglicht, Media Query-Tests innerhalb von JavaScript auszuführen. Es sieht folgendermaßen aus:

```js
if (window.matchMedia("(max-width: 480px)").matches) {
  // run JavaScript in here.
}
```

Als Beispiel macht unser [Snapshot](https://github.com/chrisdavidmills/snapshot)-Demo davon Gebrauch, um die Brick-JavaScript-Bibliothek selektiv anzuwenden und damit das UI-Layout zu handhaben, aber nur für das kleine Bildschirm-Layout (480px Breite oder weniger). Wir verwenden zuerst das `media`-Attribut, um das Brick-CSS der Seite nur dann anzuwenden, wenn die Seitenbreite 480px oder weniger beträgt:

```html
<link
  href="dist/brick.css"
  rel="stylesheet"
  media="all and (max-width: 480px)" />
```

Wir verwenden dann `matchMedia()` mehrmals im JavaScript, um die Brick-Navigationsfunktionen nur dann auszuführen, wenn wir uns im kleinen Bildschirm-Layout befinden (in größeren Bildschirm-Layouts kann alles auf einmal gesehen werden, daher müssen wir nicht zwischen verschiedenen Ansichten navigieren).

```js
if (window.matchMedia("(max-width: 480px)").matches) {
  deck.shuffleTo(1);
}
```

## Zusammenfassung

Dieser Artikel behandelte die Funktionsdetektion in einem angemessenen Detailgrad, durchging die Hauptkonzepte und zeigte Ihnen, wie Sie Ihre eigenen Funktionsdetektionstests implementieren können.

Als nächstes werden wir mit der Betrachtung von automatisierten Tests beginnen.

{{PreviousMenuNext("Learn_web_development/Extensions/Testing/HTML_and_CSS", "Learn_web_development/Extensions/Testing/Automated_testing", "Learn_web_development/Extensions/Testing")}}
