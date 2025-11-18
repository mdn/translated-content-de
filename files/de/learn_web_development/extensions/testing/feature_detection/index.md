---
title: Implementierung der Funktionsprüfung
short-title: Feature detection
slug: Learn_web_development/Extensions/Testing/Feature_detection
l10n:
  sourceCommit: 85fccefc8066bd49af4ddafc12c77f35265c7e2d
---

{{PreviousMenuNext("Learn_web_development/Extensions/Testing/HTML_and_CSS","Learn_web_development/Extensions/Testing/Automated_testing", "Learn_web_development/Extensions/Testing")}}

Die Funktionsprüfung beinhaltet das Herausfinden, ob ein Browser einen bestimmten Codeblock unterstützt, und das Ausführen eines anderen Codes, abhängig davon, ob er es tut (oder nicht), sodass der Browser immer eine funktionierende Erfahrung bieten kann, anstatt in einigen Browsern abzustürzen oder Fehler zu erzeugen. Dieser Artikel beschreibt, wie Sie Ihre eigene einfache Funktionsprüfung schreiben, wie Sie eine Bibliothek zur Beschleunigung der Implementierung verwenden und native Funktionen zur Funktionsprüfung wie `@supports` nutzen können.

<table>
  <tbody>
    <tr>
      <th scope="row">Voraussetzungen:</th>
      <td>
        Vertrautheit mit den grundlegenden <a href="/de/docs/Learn_web_development/Core/Structuring_content">HTML</a>,
        <a href="/de/docs/Learn_web_development/Core/Styling_basics">CSS</a> und
        <a href="/de/docs/Learn_web_development/Core/Scripting">JavaScript</a> Sprachen; eine Vorstellung
        von den Prinzipien des
        <a
          href="/de/docs/Learn_web_development/Extensions/Testing/Introduction"
          >plattforübergreifenden Testens</a
        >.
      </td>
    </tr>
    <tr>
      <th scope="row">Ziel:</th>
      <td>
        Verstehen, was das Konzept der Funktionsprüfung ist, und in der Lage sein,
        geeignete Lösungen in CSS und JavaScript umzusetzen.
      </td>
    </tr>
  </tbody>
</table>

## Das Konzept der Funktionsprüfung

Die Idee hinter der Funktionsprüfung ist, dass Sie einen Test ausführen können, um festzustellen, ob eine Funktion im aktuellen Browser unterstützt wird, und dann bedingt Code ausführen, um sowohl in Browsern, die die Funktion _unterstützen_, als auch in Browsern, die _nicht_ unterstützen, ein akzeptables Erlebnis zu bieten. Wenn Sie dies nicht tun, können Browser, die die Funktionen, die Sie in Ihrem Code verwenden, nicht unterstützen, Ihre Websites möglicherweise nicht richtig anzeigen oder könnten komplett fehlschlagen, was eine schlechte Benutzererfahrung erzeugt.

Lassen Sie uns rekapitulieren und uns das Beispiel ansehen, das wir in unserem [JavaScript-Debugging und Fehlerbehandlung](/de/docs/Learn_web_development/Core/Scripting/Debugging_JavaScript#feature_detection) Artikel angesprochen haben — die [Geolocation API](/de/docs/Web/API/Geolocation_API) (die verfügbare Standortdaten für das Gerät bereitstellt, auf dem der Webbrowser läuft) hat den Haupteinstiegspunkt für ihre Nutzung, eine `geolocation` Eigenschaft, die im globalen [Navigator](/de/docs/Web/API/Navigator) Objekt verfügbar ist. Daher können Sie feststellen, ob der Browser Geolocation unterstützt oder nicht, indem Sie so etwas wie das Folgende verwenden:

```js
if ("geolocation" in navigator) {
  navigator.geolocation.getCurrentPosition((position) => {
    // show the location on a map, such as the Google Maps API
  });
} else {
  // Give the user a choice of static maps
}
```

Bevor wir fortfahren, möchten wir eines vorweg sagen — verwechseln Sie die Funktionsprüfung nicht mit dem **Browser-Sniffing** (Erkennen, welcher spezifische Browser auf die Website zugreift) — dies ist eine schreckliche Praxis, die um jeden Preis vermieden werden sollte. Siehe [Browser-Erkennung mit der User-Agent-String (UA-Sniffing)](/de/docs/Web/HTTP/Guides/Browser_detection_using_the_user_agent) für mehr Details.

## Schreiben eigener Tests zur Funktionsprüfung

In diesem Abschnitt werden wir das Implementieren eigener Tests zur Funktionsprüfung sowohl in CSS als auch in JavaScript betrachten.

### CSS

Sie können Tests für CSS-Funktionen schreiben, indem Sie die Existenz von _[element.style.property](/de/docs/Web/API/HTMLElement/style)_ (z. B. `paragraph.style.rotate`) in JavaScript testen.

Ein klassisches Beispiel könnte sein, die Unterstützung für [Subgrid](/de/docs/Web/CSS/Guides/Grid_layout/Subgrid) in einem Browser zu testen; für Browser, die den `subgrid` Wert für [`grid-template-columns`](/de/docs/Web/CSS/Reference/Properties/grid-template-columns) und [`grid-template-rows`](/de/docs/Web/CSS/Reference/Properties/grid-template-rows) unterstützen, können wir Subgrid in unserem Layout verwenden. Für Browser, die dies nicht tun, könnten wir ein reguläres Raster verwenden, das zwar gut funktioniert, aber nicht so cool aussieht.

In diesem Beispiel könnten wir ein Subgrid-Stylesheet einbinden, wenn der Wert unterstützt wird, und ein reguläres Raster-Stylesheet, wenn nicht. Dazu könnten wir zwei Stylesheets in den Kopf unserer HTML-Datei einfügen: eines für das gesamte Styling und eines, das das Standardlayout implementiert, wenn Subgrid nicht unterstützt wird:

```html
<link href="basic-styling.css" rel="stylesheet" />
<link class="conditional" href="grid-layout.css" rel="stylesheet" />
```

Hier behandelt `basic-styling.css` das gesamte Styling, das wir jedem Browser geben möchten. Wir haben zwei zusätzliche CSS-Dateien, `grid-layout.css` und `subgrid-layout.css`, die das CSS enthalten, das wir je nach Unterstützungsniveau selektiv auf Browser anwenden möchten.

Wir nutzen JavaScript, um die Unterstützung für den Subgrid-Wert zu testen, und aktualisieren dann das `href` unseres bedingten Stylesheets basierend auf der Browser-Unterstützung.

Wir können ein `<script></script>` zu unserem Dokument hinzufügen, gefüllt mit dem folgenden JavaScript

```js
const conditional = document.querySelector(".conditional");
if (CSS.supports("grid-template-columns", "subgrid")) {
  conditional.setAttribute("href", "subgrid-layout.css");
}
```

In unserer Bedingung testen wir, ob die {{cssxref("grid-template-columns")}} Eigenschaft den `subgrid` Wert mittels [`CSS.supports()`](/de/docs/Web/API/CSS/supports_static) unterstützt.

#### @supports

CSS hat einen nativen Mechanismus zur Funktionsprüfung: die {{cssxref("@supports")}} At-Regel. Diese funktioniert ähnlich wie [Media Queries](/de/docs/Web/CSS/Guides/Media_queries), außer dass sie CSS selektiv anwendet, abhängig von einer CSS-Funktion, die unterstützt wird, ähnlich wie `CSS.supports()`.

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

Diese At-Regel blockiert die Anwendung der CSS-Regel nur, wenn der aktuelle Browser die `grid-template-columns: subgrid;` Deklaration unterstützt. Damit eine Bedingung mit einem Wert funktioniert, müssen Sie eine komplette Deklaration (nicht nur einen Eigenschaftsnamen) einschließen und NICHT das Semikolon am Ende einfügen.

`@supports` hat auch `AND`, `OR` und `NOT` Logik verfügbar — der andere Block wendet das reguläre Rasterlayout an, wenn die Subgrid-Option nicht verfügbar ist:

```css
@supports not (grid-template-columns: subgrid) {
  /* rules in here */
}
```

Dies ist bequemer als das vorherige Beispiel — wir können alle unsere Funktionsprüfungen in CSS durchführen, ohne dass JavaScript erforderlich ist, und wir können die gesamte Logik in einer einzigen CSS-Datei behandeln, was die HTTP-Anfragen reduziert. Aus diesem Grund ist es die bevorzugte Methode, um die Browser-Unterstützung für CSS-Funktionen zu bestimmen.

### JavaScript

Wir haben bereits ein Beispiel für einen JavaScript-Test zur Funktionsprüfung früher gesehen. Normalerweise werden solche Tests mit einem von wenigen gängigen Mustern durchgeführt.

Übliche Muster für nachweisbare Funktionen umfassen:

- Mitglieder eines Objekts
  - : Überprüfen Sie, ob eine bestimmte Methode oder Eigenschaft (typischerweise ein Einstiegspunkt für die Verwendung der API oder einer anderen Funktion, die Sie erkennen) in ihrem Eltern-`Objekt` existiert.

    Unser früheres Beispiel nutzte dieses Muster, um die Unterstützung für [Geolocation](/de/docs/Web/API/Geolocation_API) zu erkennen, indem das [`navigator`](/de/docs/Web/API/Navigator) Objekt auf ein `geolocation` Mitglied getestet wurde:

    ```js
    if ("geolocation" in navigator) {
      // Access navigator.geolocation APIs
    }
    ```

- Eigenschaften eines Elements
  - : Erstellen Sie ein Element im Speicher mit [`Document.createElement()`](/de/docs/Web/API/Document/createElement) und prüfen Sie, ob eine Eigenschaft daran existiert.

    Dieses Beispiel zeigt eine Möglichkeit, die Unterstützung der [Canvas API](/de/docs/Web/API/Canvas_API) zu erkennen:

    ```js
    function supportsCanvas() {
      return !!document.createElement("canvas").getContext;
    }

    if (supportsCanvas()) {
      // Create and draw on canvas elements
    }
    ```

    > [!NOTE]
    > Das doppelte `NOT` im obigen Beispiel (`!!`) ist eine Methode, um einen Rückgabewert in einen "richtigen" booleschen Wert zu zwingen, anstatt einen {{Glossary("Truthy", "Truthy")}}/{{Glossary("Falsy", "Falsy")}} Wert, der die Ergebnisse verfälschen könnte.

- Spezifische Rückgabewerte einer Methode auf einem Element
  - : Erstellen Sie ein Element im Speicher mit [`Document.createElement()`](/de/docs/Web/API/Document/createElement) und prüfen Sie, ob eine Methode daran existiert. Wenn sie existiert, prüfen Sie, welchen Wert sie zurückgibt.

- Beibehaltung des zugewiesenen Eigenschaftswerts durch ein Element
  - : Erstellen Sie ein Element im Speicher mit [`Document.createElement()`](/de/docs/Web/API/Document/createElement), setzen Sie eine Eigenschaft auf einen bestimmten Wert, und prüfen Sie dann, ob der Wert beibehalten wird.

Beachten Sie, dass einige Funktionen jedoch bekanntlich nicht erkennbar sind. In diesen Fällen müssen Sie einen anderen Ansatz verwenden, wie die Verwendung eines {{Glossary("Polyfill", "Polyfill")}}.

#### matchMedia

Wir wollten an dieser Stelle auch die JavaScript-Funktion [`Window.matchMedia`](/de/docs/Web/API/Window/matchMedia) erwähnen. Dies ist eine Eigenschaft, die es Ihnen ermöglicht, Media Query-Tests innerhalb von JavaScript auszuführen. Sie sieht folgendermaßen aus:

```js
if (window.matchMedia("(width <= 480px)").matches) {
  // run JavaScript in here.
}
```

Zum Beispiel nutzt unser [Snapshot](https://github.com/chrisdavidmills/snapshot) Demo diese Funktion, um die Brick-JavaScript-Bibliothek selektiv für die kleine Bildschirmansicht (480px Breite oder weniger) anzuwenden und diese zu verwenden, um das UI-Layout zu handhaben. Wir nutzen zuerst das `media` Attribut, um das Brick-CSS nur dann auf die Seite anzuwenden, wenn die Seitenbreite 480px oder weniger beträgt:

```html
<link href="dist/brick.css" rel="stylesheet" media="(width <= 480px)" />
```

Wir verwenden dann `matchMedia()` mehrmals im JavaScript, um Brick-Navigationsfunktionen nur dann auszuführen, wenn wir in der kleinen Bildschirmansicht sind (in breiteren Bildschirmansichten kann alles auf einmal gesehen werden, sodass wir nicht zwischen verschiedenen Ansichten navigieren müssen).

```js
if (window.matchMedia("(width <= 480px)").matches) {
  deck.shuffleTo(1);
}
```

## Zusammenfassung

Dieser Artikel behandelte die Funktionsprüfung in angemessener Detailtiefe, auf die grundlegenden Konzepte eingehend und zeigte Ihnen, wie Sie Ihre eigenen Tests zur Funktionsprüfung umsetzen können.

Als Nächstes werden wir uns mit dem automatisierten Testen befassen.

{{PreviousMenuNext("Learn_web_development/Extensions/Testing/HTML_and_CSS","Learn_web_development/Extensions/Testing/Automated_testing", "Learn_web_development/Extensions/Testing")}}
