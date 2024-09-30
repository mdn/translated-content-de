---
title: Implementierung von Feature-Erkennung
slug: Learn/Tools_and_testing/Cross_browser_testing/Feature_detection
l10n:
  sourceCommit: cde9330e9bbaddea72febf44dcc3a7db16fe1a11
---

{{LearnSidebar}}{{PreviousMenuNext("Learn/Tools_and_testing/Cross_browser_testing/Accessibility","Learn/Tools_and_testing/Cross_browser_testing/Automated_testing", "Learn/Tools_and_testing/Cross_browser_testing")}}

Feature-Erkennung beinhaltet das Herausfinden, ob ein Browser einen bestimmten Codeblock unterstützt, und das Ausführen von unterschiedlichem Code, je nachdem, ob er es tut (oder nicht), sodass der Browser immer eine funktionierende Erfahrung bieten kann, anstatt in einigen Browsern abzustürzen oder Fehler zu verursachen. Dieser Artikel beschreibt, wie Sie Ihre eigene einfache Feature-Erkennung schreiben, wie Sie eine Bibliothek verwenden, um die Implementierung zu beschleunigen, und native Funktionen für die Feature-Erkennung wie `@supports`.

<table>
  <tbody>
    <tr>
      <th scope="row">Voraussetzungen:</th>
      <td>
        Vertrautheit mit den Kernsprachen <a href="/de/docs/Learn/HTML">HTML</a>,
        <a href="/de/docs/Learn/CSS">CSS</a> und
        <a href="/de/docs/Learn/JavaScript">JavaScript</a>; eine Vorstellung
        von den wichtigsten
        <a
          href="/de/docs/Learn/Tools_and_testing/Cross_browser_testing/Introduction"
          >Prinzipien des Cross-Browser-Testens</a
        >.
      </td>
    </tr>
    <tr>
      <th scope="row">Ziel:</th>
      <td>
        Verstehen, was das Konzept der Feature-Erkennung ist, und in der Lage sein,
        geeignete Lösungen in CSS und JavaScript zu implementieren.
      </td>
    </tr>
  </tbody>
</table>

## Das Konzept der Feature-Erkennung

Die Idee hinter der Feature-Erkennung ist, dass Sie einen Test durchführen können, um festzustellen, ob ein Feature im aktuellen Browser unterstützt wird, und dann bedingt Code ausführen, um sowohl in Browsern, die das Feature _unterstützen_, als auch in Browsern, die es _nicht_ unterstützen, eine akzeptable Benutzererfahrung zu bieten. Wenn Sie dies nicht tun, können Browser, die die von Ihnen im Code verwendeten Funktionen nicht unterstützen, Ihre Seiten möglicherweise nicht richtig anzeigen oder sogar ganz ausfallen, was eine schlechte Benutzererfahrung schafft.

Lassen Sie uns rekapitulieren und das Beispiel betrachten, das wir in unserem [Umgang mit häufigen JavaScript-Problemen](/de/docs/Learn/Tools_and_testing/Cross_browser_testing/JavaScript#feature_detection) besprochen haben — die [Geolocation API](/de/docs/Web/API/Geolocation_API) (die verfügbare Standortdaten für das Gerät bereitstellt, auf dem der Webbrowser läuft) hat den Haupteinstiegspunkt für ihre Nutzung, eine `geolocation`-Eigenschaft, die im globalen [Navigator](/de/docs/Web/API/Navigator)-Objekt verfügbar ist. Daher können Sie erkennen, ob der Browser Geolokalisierung unterstützt oder nicht, indem Sie etwas wie das Folgende verwenden:

```js
if ("geolocation" in navigator) {
  navigator.geolocation.getCurrentPosition(function (position) {
    // show the location on a map, such as the Google Maps API
  });
} else {
  // Give the user a choice of static maps
}
```

Bevor wir fortfahren, möchten wir eines vorwegnehmen — verwechseln Sie die Feature-Erkennung nicht mit **Browser Sniffing** (Erkennung, welcher spezifische Browser auf die Website zugreift) — dies ist eine schreckliche Praxis, die unter allen Umständen vermieden werden sollte. Weitere Details finden Sie unter [don't browser sniff](/de/docs/Learn/Tools_and_testing/Cross_browser_testing/JavaScript#dont_browser_sniff).

## Schreiben Ihrer eigenen Feature-Erkennungstests

In diesem Abschnitt werden wir die Implementierung Ihrer eigenen Feature-Erkennungstests sowohl in CSS als auch in JavaScript untersuchen.

### CSS

Sie können Tests für CSS-Funktionen schreiben, indem Sie die Existenz von _[element.style.property](/de/docs/Web/API/HTMLElement/style)_ (z.B. `paragraph.style.rotate`) in JavaScript testen.

Ein klassisches Beispiel könnte darin bestehen, die Unterstützung für [Subgrid](/de/docs/Web/CSS/CSS_grid_layout/Subgrid) in einem Browser zu testen; für Browser, die den `subgrid`-Wert für einen Subgrid-Wert für [`grid-template-columns`](/de/docs/Web/CSS/grid-template-columns) und [`grid-template-rows`](/de/docs/Web/CSS/grid-template-rows) unterstützen, können wir Subgrid in unserem Layout verwenden. Für Browser, die dies nicht unterstützen, könnten wir ein reguläres Raster verwenden, das zwar gut funktioniert, aber nicht so cool aussieht.

Anhand dieses Beispiels könnten wir ein Subgrid-Stylesheet einfügen, wenn der Wert unterstützt wird, und ein reguläres Grid-Stylesheet, wenn nicht. Dazu könnten wir zwei Stylesheets im Kopf unserer HTML-Datei einfügen: eines für alle Stilgebungen und eines, das das Standardlayout implementiert, wenn Subgrid nicht unterstützt wird:

```html
<link href="basic-styling.css" rel="stylesheet" />
<link class="conditional" href="grid-layout.css" rel="stylesheet" />
```

Hier behandelt `basic-styling.css` alle Stilgebungen, die wir jedem Browser geben möchten. Wir haben zwei zusätzliche CSS-Dateien, `grid-layout.css` und `subgrid-layout.css`, die das CSS enthalten, das wir selektiv auf Browser anwenden möchten, je nach ihrem Unterstützungsgrad.

Wir verwenden JavaScript, um die Unterstützung des Subgrid-Werts zu testen, und aktualisieren dann das `href` unseres bedingten Stylesheets basierend auf der Browser-Unterstützung.

Wir können ein `<script></script>` in unser Dokument einfügen, gefüllt mit dem folgenden JavaScript

```js
const conditional = document.querySelector(".conditional");
if (CSS.supports("grid-template-columns", "subgrid")) {
  conditional.setAttribute("href", "subgrid-layout.css");
}
```

In unserer bedingten Anweisung testen wir, ob die {{cssxref("grid-template-columns")}}-Eigenschaft den `subgrid`-Wert mithilfe von [`CSS.supports()`](/de/docs/Web/API/CSS/supports_static) unterstützt.

#### @supports

CSS verfügt über einen nativen Mechanismus zur Feature-Erkennung: die {{cssxref("@supports")}}-At-Regel. Diese funktioniert ähnlich wie [media queries](/de/docs/Web/CSS/CSS_media_queries), außer dass nicht CSS selektiv je nach Medieneigenschaft wie Auflösung, Bildschirmbreite oder [Seitenverhältnis](/de/docs/Glossary/aspect_ratio) angewendet wird, sondern CSS selektiv je nach Unterstützung einer CSS-Funktion angewendet wird, ähnlich wie `CSS.supports()`.

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

Dieser At-Regel-Block wendet die CSS-Regel nur dann an, wenn der aktuelle Browser die `grid-template-columns: subgrid;`-Deklaration unterstützt. Damit eine Bedingung mit einem Wert funktioniert, müssen Sie eine vollständige Deklaration (nicht nur einen Eigenschaftsnamen) einschließen und KEIN Semikolon an das Ende setzen.

`@supports` verfügt auch über `AND`-, `OR`- und `NOT`-Logik — der andere Block wendet das reguläre Grid-Layout an, wenn die Subgrid-Option nicht verfügbar ist:

```css
@supports not (grid-template-columns: subgrid) {
  /* rules in here */
}
```

Das ist bequemer als das vorherige Beispiel — wir können unsere gesamte Feature-Erkennung in CSS durchführen, ohne dass JavaScript erforderlich ist, und wir können die gesamte Logik in einer einzigen CSS-Datei verwalten, wodurch HTTP-Anfragen reduziert werden. Aus diesem Grund ist es die bevorzugte Methode, um die Browser-Unterstützung für CSS-Funktionen zu bestimmen.

### JavaScript

Wir haben bereits früher ein Beispiel für einen JavaScript-Feature-Erkennungstest gesehen. Im Allgemeinen werden solche Tests über einige gebräuchliche Muster durchgeführt.

Gängige Muster für erkennbare Funktionen umfassen:

- Mitglieder eines Objekts

  - : Überprüfen Sie, ob eine bestimmte Methode oder Eigenschaft (typischerweise ein Einstiegspunkt für die Verwendung der zu erkennenden API oder Funktion) in ihrem übergeordneten `Object` existiert.

    Unser früheres Beispiel verwendete dieses Muster, um die [Geolocation](/de/docs/Web/API/Geolocation_API)-Unterstützung zu erkennen, indem das [`navigator`](/de/docs/Web/API/Navigator)-Objekt nach einem `geolocation`-Mitglied getestet wurde:

    ```js
    if ("geolocation" in navigator) {
      // Access navigator.geolocation APIs
    }
    ```

- Eigenschaften eines Elements

  - : Erstellen Sie ein Element im Speicher mit [`Document.createElement()`](/de/docs/Web/API/Document/createElement) und überprüfen Sie dann, ob eine Eigenschaft darauf existiert.

    Dieses Beispiel zeigt eine Möglichkeit zur Erkennung der Unterstützung der [Canvas API](/de/docs/Web/API/Canvas_API):

    ```js
    function supports_canvas() {
      return !!document.createElement("canvas").getContext;
    }

    if (supports_canvas()) {
      // Create and draw on canvas elements
    }
    ```

    > [!NOTE]
    > Das doppelte `NOT` im obigen Beispiel (`!!`) ist eine Möglichkeit, den Rückgabewert zu einem "richtigen" booleschen Wert zu zwingen, anstatt zu einem [Truthy](/de/docs/Glossary/Truthy)/[Falsy](/de/docs/Glossary/Falsy)-Wert, der die Ergebnisse verfälschen könnte.

- Spezifische Rückgabewerte einer Methode auf einem Element

  - : Erstellen Sie ein Element im Speicher mit [`Document.createElement()`](/de/docs/Web/API/Document/createElement) und überprüfen Sie dann, ob eine Methode darauf existiert. Falls dies der Fall ist, überprüfen Sie, welchen Wert sie zurückgibt. Siehe den Feature-Test in [Dive into HTML Video Format detection](https://diveinto.html5doctor.com/detect.html#video-formats) für ein Beispiel dieses Musters.

- Beibehaltung des zugewiesenen Eigenschaftswerts durch ein Element

  - : Erstellen Sie ein Element im Speicher mit [`Document.createElement()`](/de/docs/Web/API/Document/createElement), setzen Sie eine Eigenschaft auf einen bestimmten Wert und prüfen Sie dann, ob der Wert beibehalten wird. Siehe den Feature-Test in [Dive into HTML \<input> type detection](https://diveinto.html5doctor.com/detect.html#input-types) für ein Beispiel dieses Musters.

Beachten Sie, dass einige Funktionen jedoch bekanntlich nicht erkennbar sind. In diesen Fällen müssen Sie einen anderen Ansatz verwenden, wie z.B. die Verwendung eines [Polyfills](/de/docs/Glossary/Polyfill).

#### matchMedia

Wir wollten an dieser Stelle auch die JavaScript-Funktion [`Window.matchMedia`](/de/docs/Web/API/Window/matchMedia) erwähnen. Dies ist eine Eigenschaft, die es Ihnen ermöglicht, Medienabfrage-Tests in JavaScript durchzuführen. Sie sieht folgendermaßen aus:

```js
if (window.matchMedia("(max-width: 480px)").matches) {
  // run JavaScript in here.
}
```

Ein Beispiel dafür ist, dass unser [Snapshot](https://github.com/chrisdavidmills/snapshot) Demo es verwendet, um die Brick-JavaScript-Bibliothek selektiv anzuwenden und sie zur Verwaltung des UI-Layouts zu verwenden, jedoch nur für das Layout des kleinen Bildschirms (480px oder weniger breit). Wir verwenden zunächst das `media`-Attribut, um das Brick-CSS nur dann auf die Seite anzuwenden, wenn die Breite der Seite 480px oder weniger beträgt:

```html
<link
  href="dist/brick.css"
  rel="stylesheet"
  media="all and (max-width: 480px)" />
```

Wir verwenden dann `matchMedia()` mehrmals im JavaScript, um Brick-Navigationsfunktionen nur dann auszuführen, wenn wir im Layout für den kleinen Bildschirm sind (in Layouts für breitere Bildschirme kann alles gleichzeitig gesehen werden, sodass wir nicht zwischen verschiedenen Ansichten navigieren müssen).

```js
if (window.matchMedia("(max-width: 480px)").matches) {
  deck.shuffleTo(1);
}
```

## Zusammenfassung

Dieser Artikel behandelte Feature-Erkennung in einem angemessenen Detailgrad, ging durch die wichtigsten Konzepte und zeigte Ihnen, wie Sie Ihre eigenen Feature-Erkennungstests implementieren können.

Als Nächstes werden wir uns automatisierte Tests ansehen.

{{PreviousMenuNext("Learn/Tools_and_testing/Cross_browser_testing/Accessibility","Learn/Tools_and_testing/Cross_browser_testing/Automated_testing", "Learn/Tools_and_testing/Cross_browser_testing")}}
