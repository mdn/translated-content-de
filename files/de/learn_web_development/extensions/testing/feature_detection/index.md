---
title: Implementierung von Feature-Erkennung
short-title: Feature detection
slug: Learn_web_development/Extensions/Testing/Feature_detection
l10n:
  sourceCommit: 3e543cdfe8dddfb4774a64bf3decdcbab42a4111
---

{{PreviousMenuNext("Learn_web_development/Extensions/Testing/HTML_and_CSS","Learn_web_development/Extensions/Testing/Automated_testing", "Learn_web_development/Extensions/Testing")}}

Feature-Erkennung beinhaltet das Ermitteln, ob ein Browser einen bestimmten Codeblock unterstützt, und das Ausführen unterschiedlicher Codes, je nachdem, ob er es tut (oder nicht), damit der Browser immer eine funktionierende Erfahrung bieten kann, anstatt in einigen Browsern abzustürzen oder Fehler zu verursachen. Dieser Artikel beschreibt, wie Sie Ihre eigene einfache Feature-Erkennung schreiben, wie Sie eine Bibliothek zur Beschleunigung der Implementierung nutzen und native Funktionen zur Feature-Erkennung wie `@supports`.

<table>
  <tbody>
    <tr>
      <th scope="row">Voraussetzungen:</th>
      <td>
        Vertrautheit mit den Kernsprachen <a href="/de/docs/Learn_web_development/Core/Structuring_content">HTML</a>,
        <a href="/de/docs/Learn_web_development/Core/Styling_basics">CSS</a> und
        <a href="/de/docs/Learn_web_development/Core/Scripting">JavaScript</a>; eine Vorstellung von den Prinzipien des
        <a href="/de/docs/Learn_web_development/Extensions/Testing/Introduction">Cross-Browser-Testing</a>.
      </td>
    </tr>
    <tr>
      <th scope="row">Ziel:</th>
      <td>
        Verstehen, was das Konzept der Feature-Erkennung ist, und in der Lage sein, geeignete Lösungen in CSS und JavaScript zu implementieren.
      </td>
    </tr>
  </tbody>
</table>

## Das Konzept der Feature-Erkennung

Die Idee hinter der Feature-Erkennung ist, dass Sie einen Test durchführen können, um festzustellen, ob eine Funktion im aktuellen Browser unterstützt wird, und dann bedingt Code ausführen, um sowohl in Browsern, die die Funktion _unterstützen_, als auch in Browsern, die dies _nicht_ tun, eine akzeptable Erfahrung zu bieten. Ohne diese Maßnahmen könnten Browser, die die Funktionen Ihres Codes nicht unterstützen, Ihre Sites möglicherweise nicht richtig anzeigen oder ganz ausfallen, was zu einer schlechten Nutzererfahrung führt.

Lassen Sie uns das Beispiel, das wir in unserem [JavaScript-Debugging und Fehlerbehandlung](/de/docs/Learn_web_development/Core/Scripting/Debugging_JavaScript#feature_detection) Artikel angesprochen haben, noch einmal durchgehen — die [Geolocation API](/de/docs/Web/API/Geolocation_API) (die verfügbare Standortdaten für das Gerät bereitstellt, auf dem der Webbrowser läuft) hat den Haupteinstiegspunkt zur Nutzung, eine `geolocation` Eigenschaft, die im globalen [Navigator](/de/docs/Web/API/Navigator) Objekt verfügbar ist. Daher können Sie feststellen, ob der Browser Geolocation unterstützt, indem Sie etwas Ähnliches wie das folgende verwenden:

```js
if ("geolocation" in navigator) {
  navigator.geolocation.getCurrentPosition((position) => {
    // show the location on a map, such as the Google Maps API
  });
} else {
  // Give the user a choice of static maps
}
```

Bevor wir fortfahren, möchten wir eines vorweg sagen — verwechseln Sie Feature-Erkennung nicht mit dem **Erkennen von Browsern** (Ermitteln, welcher spezifische Browser auf die Site zugreift) — dies ist eine schreckliche Praxis, die unter allen Umständen vermieden werden sollte. Weitere Details finden Sie unter [Browsererkennung mit der Benutzer-Agent-Zeichenfolge (UA-Sniffing)](/de/docs/Web/HTTP/Guides/Browser_detection_using_the_user_agent).

## Schreiben eigener Feature-Erkennungstests

In diesem Abschnitt schauen wir uns die Implementierung eigener Feature-Erkennungstests sowohl in CSS als auch in JavaScript an.

### CSS

Sie können Tests für CSS-Funktionen schreiben, indem Sie in JavaScript das Vorhandensein von _[element.style.property](/de/docs/Web/API/HTMLElement/style)_ (z. B. `paragraph.style.rotate`) testen.

Ein klassisches Beispiel wäre der Test auf Unterstützung von [Subgrid](/de/docs/Web/CSS/CSS_grid_layout/Subgrid) in einem Browser; für Browser, die den `subgrid` Wert für einen Subgrid-Wert für [`grid-template-columns`](/de/docs/Web/CSS/grid-template-columns) und [`grid-template-rows`](/de/docs/Web/CSS/grid-template-rows) unterstützen, können wir Subgrid in unserem Layout verwenden. Für Browser, die dies nicht unterstützen, könnten wir reguläres Grid verwenden, das gut funktioniert, aber nicht so schick aussieht.

Unter Verwendung dieses Beispiels könnten wir ein Subgrid-Stylesheet einbinden, falls der Wert unterstützt wird, und ein reguläres Grid-Stylesheet, falls nicht. Dazu könnten wir zwei Stylesheets im Header unserer HTML-Datei einbinden: eines für das gesamte Styling und eines, das das Standardlayout implementiert, falls Subgrid nicht unterstützt wird:

```html
<link href="basic-styling.css" rel="stylesheet" />
<link class="conditional" href="grid-layout.css" rel="stylesheet" />
```

Hier kümmert sich `basic-styling.css` um all das Styling, das wir jedem Browser geben möchten. Wir haben zwei zusätzliche CSS-Dateien, `grid-layout.css` und `subgrid-layout.css`, die das CSS enthalten, das wir je nach Support-Level des Browsers selektiv anwenden möchten.

Wir verwenden JavaScript, um die Unterstützung für den Subgrid-Wert zu testen und dann das `href` unseres bedingten Stylesheets je nach Browser-Unterstützung zu aktualisieren.

Wir können ein `<script></script>` in unser Dokument einfügen, gefüllt mit dem folgenden JavaScript:

```js
const conditional = document.querySelector(".conditional");
if (CSS.supports("grid-template-columns", "subgrid")) {
  conditional.setAttribute("href", "subgrid-layout.css");
}
```

In unserer bedingten Anweisung testen wir, ob die {{cssxref("grid-template-columns")}} Eigenschaft den `subgrid` Wert mithilfe von [`CSS.supports()`](/de/docs/Web/API/CSS/supports_static) unterstützt.

#### @supports

CSS hat einen nativen Mechanismus zur Feature-Erkennung: die {{cssxref("@supports")}} At-Regel. Dies funktioniert ähnlich wie [Media Queries](/de/docs/Web/CSS/CSS_media_queries), außer dass es CSS nicht abhängig von einer Media-Eigenschaft wie einer Auflösung, Bildschirmbreite oder einem {{Glossary("aspect_ratio", "Seitenverhältnis")}} selektiv anwendet, sondern abhängig davon, ob eine CSS-Funktion unterstützt wird, ähnlich wie `CSS.supports()`.

Zum Beispiel könnten wir unser vorheriges Beispiel so umschreiben, dass `@supports` verwendet wird:

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

Dieser At-Rule-Block wendet die CSS-Regel innerhalb nur an, wenn der aktuelle Browser die `grid-template-columns: subgrid;` Deklaration unterstützt. Damit eine Bedingung mit einem Wert funktioniert, müssen Sie eine vollständige Deklaration einschließen (nicht nur einen Eigenschaftsnamen) und am Ende keinen Strichpunkt einfügen.

`@supports` hat auch eine `AND`, `OR`, und `NOT` Logik verfügbar — der andere Block wendet das reguläre Grid-Layout an, wenn die Subgrid-Option nicht verfügbar ist:

```css
@supports not (grid-template-columns: subgrid) {
  /* rules in here */
}
```

Dies ist bequemer als das vorherige Beispiel — wir können alle unsere Funktionstests in CSS durchführen, ohne dass JavaScript erforderlich ist, und wir können die gesamte Logik in einer einzigen CSS-Datei behandeln, wodurch HTTP-Anfragen reduziert werden. Aus diesem Grund ist es die bevorzugte Methode, um die Browserunterstützung für CSS-Funktionen zu bestimmen.

### JavaScript

Wir haben früher ein Beispiel für einen JavaScript Feature-Erkennungstest gesehen. Im Allgemeinen werden solche Tests über einige übliche Muster durchgeführt.

Gängige Muster für erkennbare Funktionen umfassen:

- Mitglieder eines Objekts

  - : Überprüfen Sie, ob eine bestimmte Methode oder Eigenschaft (typischerweise ein Einstiegspunkt zur Nutzung der von Ihnen erkannten API oder anderen Funktion) in ihrem übergeordneten `Object` existiert.

    Unser früheres Beispiel hat dieses Muster verwendet, um die Unterstützung der [Geolocation](/de/docs/Web/API/Geolocation_API) zu erkennen, indem das [`navigator`](/de/docs/Web/API/Navigator) Objekt auf ein `geolocation` Mitglied geprüft wurde:

    ```js
    if ("geolocation" in navigator) {
      // Access navigator.geolocation APIs
    }
    ```

- Eigenschaften eines Elements

  - : Erstellen Sie ein Element im Speicher mit [`Document.createElement()`](/de/docs/Web/API/Document/createElement) und prüfen Sie dann, ob eine Eigenschaft existiert.

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
    > Das doppelte `NOT` im obigen Beispiel (`!!`) ist eine Möglichkeit, einen Rückgabewert zu erzwingen, ein "richtiges" boolesches Wert zu werden, anstatt einen {{Glossary("Truthy", "Truthy")}}/{{Glossary("Falsy", "Falsy")}} Wert, der die Ergebnisse verfälschen könnte.

- Spezifische Rückgabewerte einer Methode auf einem Element

  - : Erstellen Sie ein Element im Speicher mit [`Document.createElement()`](/de/docs/Web/API/Document/createElement) und prüfen Sie dann, ob eine Methode existiert. Wenn ja, prüfen Sie, welchen Wert sie zurückgibt.

- Speicherung eines zugewiesenen Eigenschaftswerts durch ein Element
  - : Erstellen Sie ein Element im Speicher mit [`Document.createElement()`](/de/docs/Web/API/Document/createElement), setzen Sie eine Eigenschaft auf einen bestimmten Wert und prüfen Sie dann, ob der Wert beibehalten wird.

Beachten Sie, dass einige Funktionen jedoch als nicht erkennbar bekannt sind. In solchen Fällen müssen Sie einen anderen Ansatz verwenden, wie z. B. die Verwendung eines {{Glossary("Polyfill", "Polyfills")}}.

#### matchMedia

Wir möchten an dieser Stelle auch die JavaScript-Funktion [`Window.matchMedia`](/de/docs/Web/API/Window/matchMedia) erwähnen. Dies ist eine Eigenschaft, die es Ihnen ermöglicht, Medienabfrage-Tests innerhalb von JavaScript auszuführen. Es sieht so aus:

```js
if (window.matchMedia("(max-width: 480px)").matches) {
  // run JavaScript in here.
}
```

Unser [Snapshot](https://github.com/chrisdavidmills/snapshot) Demo-Programm verwendet es beispielsweise, um selektiv die Brick JavaScript-Bibliothek anzuwenden und sie zur Handhabung des UI-Layouts zu nutzen, allerdings nur für das kleines Bildschirmlayout (480px breit oder weniger). Wir verwenden zuerst das `media` Attribut, um das Brick CSS nur auf die Seite anzuwenden, wenn die Seitenbreite 480px oder weniger beträgt:

```html
<link
  href="dist/brick.css"
  rel="stylesheet"
  media="all and (max-width: 480px)" />
```

Wir verwenden dann `matchMedia()` mehrmals im JavaScript, um die Brick-Navigationsfunktionen nur auszuführen, wenn wir im kleinen Bildschirmlayout sind (in breiteren Layouts kann alles auf einmal gesehen werden, daher müssen wir nicht zwischen verschiedenen Ansichten navigieren).

```js
if (window.matchMedia("(max-width: 480px)").matches) {
  deck.shuffleTo(1);
}
```

## Zusammenfassung

Dieser Artikel behandelte die Feature-Erkennung in einem angemessenen Detailgrad, durchging die wichtigsten Konzepte und zeigte Ihnen, wie Sie Ihre eigenen Feature-Erkennungstests implementieren können.

Als Nächstes werden wir uns mit automatisiertem Testen beschäftigen.

{{PreviousMenuNext("Learn_web_development/Extensions/Testing/HTML_and_CSS","Learn_web_development/Extensions/Testing/Automated_testing", "Learn_web_development/Extensions/Testing")}}
