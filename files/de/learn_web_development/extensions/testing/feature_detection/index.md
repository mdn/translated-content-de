---
title: Implementierung der Funktionsprüfung
slug: Learn_web_development/Extensions/Testing/Feature_detection
l10n:
  sourceCommit: 5b20f5f4265f988f80f513db0e4b35c7e0cd70dc
---

{{LearnSidebar}}{{PreviousMenuNext("Learn_web_development/Extensions/Testing/HTML_and_CSS","Learn_web_development/Extensions/Testing/Automated_testing", "Learn_web_development/Extensions/Testing")}}

Die Funktionsprüfung beinhaltet, herauszufinden, ob ein Browser einen bestimmten Codeblock unterstützt, und je nach Ergebnis unterschiedlichen Code auszuführen, sodass der Browser immer eine funktionierende Erfahrung bieten kann, anstatt in einigen Browsern abzustürzen/Fehler zu verursachen. Dieser Artikel erläutert, wie Sie Ihre eigene einfache Funktionsprüfung schreiben, wie Sie eine Bibliothek zur Beschleunigung der Implementierung verwenden und native Funktionen zur Funktionsprüfung wie `@supports`.

<table>
  <tbody>
    <tr>
      <th scope="row">Voraussetzungen:</th>
      <td>
        Vertrautheit mit den Kernsprachen <a href="/de/docs/Learn_web_development/Core/Structuring_content">HTML</a>,
        <a href="/de/docs/Learn_web_development/Core/Styling_basics">CSS</a> und
        <a href="/de/docs/Learn_web_development/Core/Scripting">JavaScript</a>; ein Verständnis
        der hochrangigen
        <a
          href="/de/docs/Learn_web_development/Extensions/Testing/Introduction"
          >Prinzipien des Browser-übergreifenden Testens</a
        >.
      </td>
    </tr>
    <tr>
      <th scope="row">Ziel:</th>
      <td>
        Zu verstehen, was das Konzept der Funktionsprüfung ist und in der Lage zu sein,
        geeignete Lösungen in CSS und JavaScript zu implementieren.
      </td>
    </tr>
  </tbody>
</table>

## Das Konzept der Funktionsprüfung

Die Idee hinter der Funktionsprüfung ist, dass Sie einen Test ausführen können, um festzustellen, ob eine Funktion im aktuellen Browser unterstützt wird, und dann bedingt Code ausführen, um eine akzeptable Erfahrung sowohl in Browsern zu bieten, die die Funktion unterstützen, als auch in Browsern, die dies nicht tun. Wenn Sie dies nicht tun, können Browser, die die Funktionen, die Sie in Ihrem Code verwenden, nicht unterstützen, Ihre Websites möglicherweise nicht richtig anzeigen oder sogar vollständig versagen, was eine schlechte Benutzererfahrung schafft.

Lassen Sie uns rekapitulieren und das Beispiel betrachten, das wir in unserem Abschnitt [Behandlung häufiger JavaScript-Probleme](/de/docs/Learn_web_development/Core/Scripting/Debugging_JavaScript#feature_detection) angesprochen haben — die [Geolocation API](/de/docs/Web/API/Geolocation_API) (die verfügbare Standortdaten für das Gerät bereitstellt, auf dem der Webbrowser ausgeführt wird) hat als Haupteinstiegspunkt für ihre Nutzung eine `geolocation`-Eigenschaft, die auf dem globalen [Navigator](/de/docs/Web/API/Navigator)-Objekt verfügbar ist. Daher können Sie feststellen, ob der Browser Geolocation unterstützt oder nicht, indem Sie etwas wie das Folgende verwenden:

```js
if ("geolocation" in navigator) {
  navigator.geolocation.getCurrentPosition(function (position) {
    // show the location on a map, such as the Google Maps API
  });
} else {
  // Give the user a choice of static maps
}
```

Bevor wir weitermachen, möchten wir eine Sache im Voraus sagen — verwechseln Sie die Funktionsprüfung nicht mit **Browser-Sniffing** (Erkennung, welcher spezifische Browser auf die Website zugreift) — dies ist eine schreckliche Praxis, die unter allen Umständen vermieden werden sollte. Weitere Einzelheiten finden Sie unter [don't browser sniff](/de/docs/Learn_web_development/Core/Scripting/Debugging_JavaScript#dont_browser_sniff).

## Schreiben eigener Funktionsprüfungen

In diesem Abschnitt sehen wir uns an, wie Sie Ihre eigenen Funktionsprüfungen in CSS und JavaScript implementieren.

### CSS

Sie können Tests für CSS-Funktionen schreiben, indem Sie das Vorhandensein von _[element.style.property](/de/docs/Web/API/HTMLElement/style)_ (z. B. `paragraph.style.rotate`) in JavaScript testen.

Ein klassisches Beispiel wäre, die Unterstützung für [Subgrid](/de/docs/Web/CSS/CSS_grid_layout/Subgrid) in einem Browser zu testen; für Browser, die den `subgrid`-Wert für einen Subgrid-Wert für [`grid-template-columns`](/de/docs/Web/CSS/grid-template-columns) und [`grid-template-rows`](/de/docs/Web/CSS/grid-template-rows) unterstützen, können wir ein Subgrid in unserem Layout verwenden. Für Browser, die dies nicht tun, könnten wir ein reguläres Grid verwenden, das gut funktioniert, aber nicht so cool aussieht.

Mithilfe dieses Beispiels könnten wir ein Subgrid-Stylesheet einbinden, wenn der Wert unterstützt wird, und ein reguläres Grid-Stylesheet, wenn nicht. Dazu können wir zwei Stylesheets im Head unserer HTML-Datei einfügen: eines für das gesamte Styling und eines, das das Standardlayout implementiert, wenn Subgrid nicht unterstützt wird:

```html
<link href="basic-styling.css" rel="stylesheet" />
<link class="conditional" href="grid-layout.css" rel="stylesheet" />
```

Hier behandelt `basic-styling.css` alle Styles, die wir jedem Browser geben möchten. Wir haben zwei zusätzliche CSS-Dateien, `grid-layout.css` und `subgrid-layout.css`, die das CSS enthalten, das wir je nach Unterstützungsniveau selektiv auf Browser anwenden möchten.

Wir verwenden JavaScript, um die Unterstützung für den Subgrid-Wert zu testen, und aktualisieren dann das `href` unseres bedingten Stylesheets basierend auf der Browser-Unterstützung.

Wir können ein `<script></script>` zu unserem Dokument hinzufügen, gefüllt mit folgendem JavaScript

```js
const conditional = document.querySelector(".conditional");
if (CSS.supports("grid-template-columns", "subgrid")) {
  conditional.setAttribute("href", "subgrid-layout.css");
}
```

In unserer bedingten Anweisung testen wir, ob die {{cssxref("grid-template-columns")}}-Eigenschaft den `subgrid`-Wert mithilfe von [`CSS.supports()`](/de/docs/Web/API/CSS/supports_static) unterstützt.

#### @supports

CSS verfügt über einen nativen Mechanismus zur Funktionsprüfung: die {{cssxref("@supports")}}-At-Regel. Diese funktioniert ähnlich wie [Medienabfragen](/de/docs/Web/CSS/CSS_media_queries), jedoch wird nicht selektiv CSS entsprechend einer Medienfunktion wie Auflösung, Bildschirmbreite oder {{Glossary("aspect_ratio", "Seitenverhältnis")}} angewendet, sondern basierend darauf, ob eine CSS-Funktion unterstützt wird, ähnlich wie `CSS.supports()`.

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

Dieser At-Regel-Block wendet die darin enthaltene CSS-Regel nur an, wenn der aktuelle Browser die Deklaration `grid-template-columns: subgrid;` unterstützt. Damit eine Bedingung mit einem Wert funktioniert, müssen Sie eine vollständige Deklaration beinhalten (nicht nur einen Eigenschaftsnamen) und dürfen das Semikolon am Ende NICHT einschließen.

`@supports` bietet auch `AND`, `OR` und `NOT` Logik — der andere Block wendet das reguläre Grid-Layout an, wenn die Subgrid-Option nicht verfügbar ist:

```css
@supports not (grid-template-columns: subgrid) {
  /* rules in here */
}
```

Dies ist praktischer als das vorherige Beispiel — wir können all unsere Funktionsprüfungen in CSS durchführen, ohne dass JavaScript erforderlich ist, und wir können die gesamte Logik in einer einzigen CSS-Datei handhaben, wodurch HTTP-Anfragen reduziert werden. Aus diesem Grund ist es die bevorzugte Methode, um die Browser-Unterstützung für CSS-Funktionen zu bestimmen.

### JavaScript

Wir haben bereits ein Beispiel für eine JavaScript-Funktionsprüfung gesehen. Im Allgemeinen werden solche Tests über eines von wenigen gängigen Mustern durchgeführt.

Gängige Muster für nachweisbare Funktionen umfassen:

- Members of an object

  - : Prüfen Sie, ob eine bestimmte Methode oder Eigenschaft (typischerweise ein Einstiegspunkt zur Nutzung der API oder anderer Funktionen, die Sie erkennen) im übergeordneten `Object` existiert.

    Unser früheres Beispiel verwendete dieses Muster, um die Unterstützung für [Geolocation](/de/docs/Web/API/Geolocation_API) durch Testen des [`navigator`](/de/docs/Web/API/Navigator)-Objekts auf ein `geolocation`-Element zu erkennen:

    ```js
    if ("geolocation" in navigator) {
      // Access navigator.geolocation APIs
    }
    ```

- Eigenschaften eines Elements

  - : Erstellen Sie ein Element im Speicher mit [`Document.createElement()`](/de/docs/Web/API/Document/createElement) und prüfen Sie dann, ob eine Eigenschaft vorhanden ist.

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
    > Das doppelte `NOT` im obigen Beispiel (`!!`) ist eine Möglichkeit, einen Rückgabewert zu einem „richtigen“ booleschen Wert zu machen, anstatt zu einem {{Glossary("Truthy", "Truthy")}}/{{Glossary("Falsy", "Falsy")}}-Wert, der die Ergebnisse verfälschen könnte.

- Spezifische Rückgabewerte einer Methode auf einem Element

  - : Erstellen Sie ein Element im Speicher mit [`Document.createElement()`](/de/docs/Web/API/Document/createElement) und prüfen Sie dann, ob eine Methode darauf existiert. Wenn dies der Fall ist, prüfen Sie, welchen Wert sie zurückgibt. Siehe den Funktionstest in [Dive into HTML Video Format detection](https://diveinto.html5doctor.com/detect.html#video-formats) für ein Beispiel dieses Musters.

- Beibehaltung eines zugewiesenen Eigenschaftswertes durch ein Element

  - : Erstellen Sie ein Element im Speicher mit [`Document.createElement()`](/de/docs/Web/API/Document/createElement), setzen Sie eine Eigenschaft auf einen bestimmten Wert und prüfen Sie dann, ob der Wert erhalten bleibt. Siehe den Funktionstest in [Dive into HTML \<input> type detection](https://diveinto.html5doctor.com/detect.html#input-types) für ein Beispiel dieses Musters.

Beachten Sie, dass einige Funktionen jedoch als nicht nachweisbar bekannt sind. In diesen Fällen müssen Sie einen anderen Ansatz verwenden, wie z.B. ein {{Glossary("Polyfill", "Polyfill")}} zu verwenden.

#### matchMedia

Wir wollten an dieser Stelle auch die JavaScript-Funktion [`Window.matchMedia`](/de/docs/Web/API/Window/matchMedia) erwähnen. Dies ist eine Eigenschaft, die es Ihnen ermöglicht, Medienabfragen in JavaScript durchzuführen. Es sieht folgendermaßen aus:

```js
if (window.matchMedia("(max-width: 480px)").matches) {
  // run JavaScript in here.
}
```

Als Beispiel verwendet unser [Snapshot](https://github.com/chrisdavidmills/snapshot)-Demo es, um selektiv die Brick-JavaScript-Bibliothek zu verwenden und damit das UI-Layout zu steuern, aber nur für das kleine Bildschirm-Layout (480px breit oder weniger). Zuerst verwenden wir das `media`-Attribut, um die Brick-CSS nur dann auf die Seite anzuwenden, wenn die Seitenbreite 480px oder weniger beträgt:

```html
<link
  href="dist/brick.css"
  rel="stylesheet"
  media="all and (max-width: 480px)" />
```

Wir verwenden dann `matchMedia()` mehrmals im JavaScript, um Brick-Navigationsfunktionen nur dann auszuführen, wenn wir uns im kleinen Bildschirm-Layout befinden (in größeren Bildschirm-Layouts kann alles auf einmal gesehen werden, sodass wir nicht zwischen verschiedenen Ansichten navigieren müssen).

```js
if (window.matchMedia("(max-width: 480px)").matches) {
  deck.shuffleTo(1);
}
```

## Zusammenfassung

Dieser Artikel hat die Funktionsprüfung in angemessenem Detail behandelt, die wichtigsten Konzepte durchgegangen und gezeigt, wie Sie Ihre eigenen Funktionsprüfungen implementieren können.

Als nächstes beginnen wir mit dem Blick auf automatisiertes Testen.

{{PreviousMenuNext("Learn_web_development/Extensions/Testing/HTML_and_CSS","Learn_web_development/Extensions/Testing/Automated_testing", "Learn_web_development/Extensions/Testing")}}
