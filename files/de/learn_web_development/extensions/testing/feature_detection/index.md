---
title: Implementierung von Feature-Erkennung
short-title: Feature detection
slug: Learn_web_development/Extensions/Testing/Feature_detection
l10n:
  sourceCommit: f336c5b6795a562c64fe859aa9ee2becf223ad8a
---

{{PreviousMenuNext("Learn_web_development/Extensions/Testing/HTML_and_CSS","Learn_web_development/Extensions/Testing/Automated_testing", "Learn_web_development/Extensions/Testing")}}

Die Feature-Erkennung beinhaltet das Ermitteln, ob ein Browser einen bestimmten Codeblock unterstützt, und das Ausführen eines anderen Codes, je nachdem, ob er dies tut (oder nicht), sodass der Browser stets ein funktionierendes Erlebnis bieten kann, anstatt in einigen Browsern abzustürzen oder Fehler zu verursachen. Dieser Artikel beschreibt, wie Sie Ihre eigene einfache Feature-Erkennung schreiben, wie Sie eine Bibliothek zur Beschleunigung der Implementierung verwenden und native Funktionen zur Feature-Erkennung wie `@supports`.

<table>
  <tbody>
    <tr>
      <th scope="row">Voraussetzungen:</th>
      <td>
        Vertrautheit mit den grundlegenden <a href="/de/docs/Learn_web_development/Core/Structuring_content">HTML</a>,
        <a href="/de/docs/Learn_web_development/Core/Styling_basics">CSS</a> und
        <a href="/de/docs/Learn_web_development/Core/Scripting">JavaScript</a> Sprachen; eine Vorstellung
        von den grundlegenden
        <a
          href="/de/docs/Learn_web_development/Extensions/Testing/Introduction"
          >Prinzipien des Cross-Browser-Testings</a
        >.
      </td>
    </tr>
    <tr>
      <th scope="row">Ziel:</th>
      <td>Das Konzept der Feature-Erkennung zu verstehen und in der Lage zu sein, geeignete Lösungen in CSS und JavaScript zu implementieren.</td>
    </tr>
  </tbody>
</table>

## Das Konzept der Feature-Erkennung

Die Idee hinter der Feature-Erkennung ist, dass Sie einen Test durchführen können, um zu bestimmen, ob ein Feature im aktuellen Browser unterstützt wird, und dann bedingt Code ausführen, um ein akzeptables Erlebnis sowohl in Browsern zu bieten, die das Feature _unterstützen_, als auch in Browsern, die es _nicht tun_. Wenn Sie dies nicht tun, könnten Browser, die die Features, die Sie in Ihrem Code verwenden, nicht unterstützen, Ihre Seiten nicht ordnungsgemäß anzeigen oder vollständig versagen, was zu einem schlechten Nutzererlebnis führt.

Lassen Sie uns rekapitulieren und das Beispiel betrachten, das wir in unserem Artikel [JavaScript-Debugging und Fehlerbehandlung](/de/docs/Learn_web_development/Core/Scripting/Debugging_JavaScript#feature_detection) angesprochen haben — die [Geolocation API](/de/docs/Web/API/Geolocation_API) (die verfügbare Standortdaten für das Gerät bereitstellt, auf dem der Webbrowser läuft) hat den Haupteinstiegspunkt für ihre Verwendung in einer `geolocation`-Eigenschaft, die im globalen [Navigator](/de/docs/Web/API/Navigator)-Objekt verfügbar ist. Daher können Sie erkennen, ob der Browser Geolocation unterstützt oder nicht, indem Sie etwas wie das Folgende verwenden:

```js
if ("geolocation" in navigator) {
  navigator.geolocation.getCurrentPosition((position) => {
    // show the location on a map, such as the Google Maps API
  });
} else {
  // Give the user a choice of static maps
}
```

Bevor wir fortfahren, möchten wir eines von vornherein klarstellen — verwechseln Sie Feature-Erkennung nicht mit **Browser-Sniffing** (Erkennung, welcher spezifische Browser auf die Seite zugreift) — dies ist eine schreckliche Praxis, die unter allen Umständen vermieden werden sollte. Siehe [Browser-Erkennung unter Verwendung des User-Agent-Strings (UA-Sniffing)](/de/docs/Web/HTTP/Guides/Browser_detection_using_the_user_agent) für weitere Details.

## Eigene Feature-Erkennungstests schreiben

In diesem Abschnitt werden wir uns ansehen, wie Sie Ihre eigenen Feature-Erkennungstests sowohl in CSS als auch in JavaScript implementieren können.

### CSS

Sie können Tests für CSS-Features schreiben, indem Sie in JavaScript nach der Existenz von _[element.style.property](/de/docs/Web/API/HTMLElement/style)_ (z.B. `paragraph.style.rotate`) testen.

Ein klassisches Beispiel könnte sein, die Unterstützung für [Subgrid](/de/docs/Web/CSS/CSS_grid_layout/Subgrid) in einem Browser zu testen; für Browser, die den `subgrid`-Wert für einen Subgrid-Wert für [`grid-template-columns`](/de/docs/Web/CSS/Reference/Properties/grid-template-columns) und [`grid-template-rows`](/de/docs/Web/CSS/Reference/Properties/grid-template-rows) unterstützen, können wir Subgrid in unserem Layout verwenden. Für Browser, die dies nicht tun, könnten wir ein reguläres Raster verwenden, das zwar nicht so cool aussieht, aber dennoch funktioniert.

Unter Verwendung dieses Beispiels könnten wir ein Subgrid-Stylesheet einbinden, wenn der Wert unterstützt wird, und ein reguläres Raster-Stylesheet, wenn nicht. Dazu könnten wir zwei Stylesheets im Kopfbereich unserer HTML-Datei einbinden: eines für das gesamte Styling und eines, das das Standardlayout implementiert, wenn Subgrid nicht unterstützt wird:

```html
<link href="basic-styling.css" rel="stylesheet" />
<link class="conditional" href="grid-layout.css" rel="stylesheet" />
```

Hier kümmert sich `basic-styling.css` um das gesamte Styling, das wir jedem Browser geben möchten. Wir haben zwei zusätzliche CSS-Dateien, `grid-layout.css` und `subgrid-layout.css`, die das CSS enthalten, das wir abhängig von den Unterstützungsstufen der Browser selektiv anwenden möchten.

Wir verwenden JavaScript, um die Unterstützung für den Subgrid-Wert zu testen, und aktualisieren dann das `href` unseres bedingten Stylesheets basierend auf der Unterstützung des Browsers.

Wir können ein `<script></script>`-Element zu unserem Dokument hinzufügen, gefüllt mit dem folgenden JavaScript:

```js
const conditional = document.querySelector(".conditional");
if (CSS.supports("grid-template-columns", "subgrid")) {
  conditional.setAttribute("href", "subgrid-layout.css");
}
```

In unserer Bedingungsanweisung testen wir, ob die {{cssxref("grid-template-columns")}}-Eigenschaft den `subgrid`-Wert mit [`CSS.supports()`](/de/docs/Web/API/CSS/supports_static) unterstützt.

#### @supports

CSS hat einen nativen Mechanismus zur Feature-Erkennung: die {{cssxref("@supports")}} At-Regel. Diese funktioniert ähnlich wie [Media Queries](/de/docs/Web/CSS/CSS_media_queries), außer dass sie anstelle der selektiven Anwendung von CSS je nach Medienmerkmal wie Auflösung, Bildschirmbreite oder {{Glossary("aspect_ratio", "Bildseitenverhältnis")}}, CSS je nach CSS-Feature selektiv anwendet, ähnlich wie `CSS.supports()`.

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

Dieser At-Regelblock wendet die CSS-Regel nur dann an, wenn der aktuelle Browser die `grid-template-columns: subgrid;`-Deklaration unterstützt. Damit eine Bedingung mit einem Wert funktioniert, müssen Sie eine vollständige Deklaration (nicht nur einen Eigenschaftsnamen) und NICHT das Semikolon am Ende einschließen.

`@supports` hat auch eine `UND`, `ODER` und `NICHT` Logik verfügbar — der andere Block wendet das reguläre Grid-Layout an, wenn die Subgrid-Option nicht verfügbar ist:

```css
@supports not (grid-template-columns: subgrid) {
  /* rules in here */
}
```

Dies ist bequemer als das vorherige Beispiel — wir können unsere gesamte Feature-Erkennung in CSS durchführen, kein JavaScript erforderlich, und wir können die gesamte Logik in einer einzigen CSS-Datei behandeln, wodurch HTTP-Anfragen reduziert werden. Aus diesem Grund ist es die bevorzugte Methode zur Bestimmung der Unterstützung von CSS-Features in Browsern.

### JavaScript

Wir haben bereits ein Beispiel für einen JavaScript-Feature-Erkennungstest gesehen. Im Allgemeinen werden solche Tests über eines von wenigen üblichen Mustern durchgeführt.

Übliche Muster für erkennbare Features enthalten:

- Mitglieder eines Objekts
  - : Überprüfen Sie, ob eine bestimmte Methode oder Eigenschaft (typischerweise ein Einstiegspunkt in die Verwendung der API oder eines anderen Features, das Sie erkennen) in ihrem übergeordneten `Objekt` existiert.

    Unser früheres Beispiel verwendete dieses Muster, um die Unterstützung für [Geolocation](/de/docs/Web/API/Geolocation_API) zu erkennen, indem das [`navigator`](/de/docs/Web/API/Navigator)-Objekt auf ein `geolocation`-Mitglied getestet wurde:

    ```js
    if ("geolocation" in navigator) {
      // Access navigator.geolocation APIs
    }
    ```

- Eigenschaften eines Elements
  - : Erstellen Sie ein Element im Speicher mit [`Document.createElement()`](/de/docs/Web/API/Document/createElement) und überprüfen Sie, ob eine Eigenschaft darauf existiert.

    Dieses Beispiel zeigt eine Möglichkeit, die Unterstützung der [Canvas-API](/de/docs/Web/API/Canvas_API) zu erkennen:

    ```js
    function supportsCanvas() {
      return !!document.createElement("canvas").getContext;
    }

    if (supportsCanvas()) {
      // Create and draw on canvas elements
    }
    ```

    > [!NOTE]
    > Das doppelte `NICHT` im obigen Beispiel (`!!`) ist eine Möglichkeit, einen Rückgabewert zu zwingen, ein "richtiges" boolesches Wert zu werden, anstatt ein {{Glossary("Truthy", "Wahrheitsträger")}}/{{Glossary("Falsy", "Falschwert")}}-Wert, der die Ergebnisse verfälschen könnte.

- Spezifische Rückgabewerte einer Methode an einem Element
  - : Erstellen Sie ein Element im Speicher mit [`Document.createElement()`](/de/docs/Web/API/Document/createElement) und überprüfen Sie, ob eine Methode darauf existiert. Wenn ja, prüfen Sie, welchen Wert diese zurückgibt.

- Beibehaltung eines zugewiesenen Eigenschaftswertes durch ein Element
  - : Erstellen Sie ein Element im Speicher mit [`Document.createElement()`](/de/docs/Web/API/Document/createElement), setzen Sie eine Eigenschaft auf einen bestimmten Wert und überprüfen Sie dann, ob der Wert beibehalten wird.

Beachten Sie, dass einige Features jedoch dafür bekannt sind, nicht erkennbar zu sein. In diesen Fällen müssen Sie einen anderen Ansatz verwenden, wie z.B. die Verwendung eines {{Glossary("Polyfill", "Polyfills")}}.

#### matchMedia

Wir wollten an diesem Punkt auch auf das JavaScript-Feature [`Window.matchMedia`](/de/docs/Web/API/Window/matchMedia) hinweisen. Dies ist eine Eigenschaft, die es Ihnen ermöglicht, Media Query-Tests innerhalb von JavaScript auszuführen. Es sieht folgendermaßen aus:

```js
if (window.matchMedia("(width <= 480px)").matches) {
  // run JavaScript in here.
}
```

Zum Beispiel verwendet unser [Snapshot](https://github.com/chrisdavidmills/snapshot)-Demo dies, um selektiv die Brick-JavaScript-Bibliothek anzuwenden und sie zu verwenden, um das UI-Layout zu handhaben, jedoch nur für das kleine Bildschirm-Layout (480px breit oder weniger). Zuerst verwenden wir das `media`-Attribut, um das Brick-CSS nur dann auf die Seite anzuwenden, wenn die Seitenbreite 480px oder weniger beträgt:

```html
<link href="dist/brick.css" rel="stylesheet" media="(width <= 480px)" />
```

Wir verwenden dann `matchMedia()` in JavaScript mehrere Male, um Brick-Navigationsfunktionen nur dann auszuführen, wenn wir im kleinen Bildschirm-Layout sind (in breiteren Bildschirm-Layouts kann alles auf einmal gesehen werden, sodass wir nicht zwischen verschiedenen Ansichten navigieren müssen).

```js
if (window.matchMedia("(width <= 480px)").matches) {
  deck.shuffleTo(1);
}
```

## Zusammenfassung

Dieser Artikel behandelte die Feature-Erkennung in einem angemessenen Detaillierungsgrad und zeigte Ihnen die Hauptkonzepte und wie Sie Ihre eigenen Feature-Erkennungstests implementieren können.

Als nächstes werden wir uns mit automatisierten Tests befassen.

{{PreviousMenuNext("Learn_web_development/Extensions/Testing/HTML_and_CSS","Learn_web_development/Extensions/Testing/Automated_testing", "Learn_web_development/Extensions/Testing")}}
