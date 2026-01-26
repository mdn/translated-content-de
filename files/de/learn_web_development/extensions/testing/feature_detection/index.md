---
title: Implementierung der Feature-Erkennung
short-title: Feature detection
slug: Learn_web_development/Extensions/Testing/Feature_detection
l10n:
  sourceCommit: 2b4a2ad5d9ba084a9eaa2f9204102655e7b575c4
---

{{PreviousMenuNext("Learn_web_development/Extensions/Testing/HTML_and_CSS","Learn_web_development/Extensions/Testing/Automated_testing", "Learn_web_development/Extensions/Testing")}}

Die Feature-Erkennung beinhaltet das Herausfinden, ob ein Browser einen bestimmten Codeblock unterstützt, und das Ausführen unterschiedlichen Codes abhängig davon, ob er dies tut (oder nicht), sodass der Browser immer eine funktionierende Erfahrung bieten kann, anstatt in einigen Browsern abzustürzen oder Fehler zu erzeugen. Dieser Artikel beschreibt, wie Sie Ihre eigene einfache Feature-Erkennung schreiben, wie Sie eine Bibliothek zur Beschleunigung der Implementierung verwenden und native Funktionen zur Feature-Erkennung wie `@supports`.

<table>
  <tbody>
    <tr>
      <th scope="row">Voraussetzungen:</th>
      <td>
        Vertrautheit mit den Kernsprachen <a href="/de/docs/Learn_web_development/Core/Structuring_content">HTML</a>,
        <a href="/de/docs/Learn_web_development/Core/Styling_basics">CSS</a> und
        <a href="/de/docs/Learn_web_development/Core/Scripting">JavaScript</a>; eine Vorstellung von den
        übergeordneten
        <a
          href="/de/docs/Learn_web_development/Extensions/Testing/Introduction"
          >Prinzipien des Cross-Browser-Testings</a
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

Die Idee der Feature-Erkennung ist, dass Sie einen Test durchführen können, um festzustellen, ob ein Feature im aktuellen Browser unterstützt wird, und dann bedingt Code ausführen, um eine akzeptable Erfahrung sowohl in Browsern zu bieten, die das Feature unterstützen, als auch in solchen, die es nicht unterstützen. Wenn Sie dies nicht tun, können Browser, die die von Ihnen verwendeten Features nicht unterstützen, Ihre Websites nicht ordnungsgemäß anzeigen oder vollständig fehlschlagen, was eine schlechte Benutzererfahrung erzeugt.

Lassen Sie uns rekapitulieren und das Beispiel betrachten, das wir in unserem Artikel über [JavaScript-Debugging und Fehlerbehandlung](/de/docs/Learn_web_development/Core/Scripting/Debugging_JavaScript#feature_detection) angesprochen haben — die [Geolocation API](/de/docs/Web/API/Geolocation_API) (die verfügbare Standortdaten für das Gerät bereitstellt, auf dem der Webbrowser läuft) hat den Haupteinstiegspunkt für ihre Nutzung, eine `geolocation`-Eigenschaft, die auf dem globalen [Navigator](/de/docs/Web/API/Navigator)-Objekt verfügbar ist. Daher können Sie ermitteln, ob der Browser Geolokalisierung unterstützt oder nicht, indem Sie etwas Ähnliches wie das folgende verwenden:

```js
if ("geolocation" in navigator) {
  navigator.geolocation.getCurrentPosition((position) => {
    // show the location on a map, such as the Google Maps API
  });
} else {
  // Give the user a choice of static maps
}
```

Bevor wir fortfahren, möchten wir eines von Anfang an klarstellen — verwechseln Sie Feature-Erkennung nicht mit **Browser-Erkennung** (Erkennung, welcher spezifische Browser auf die Seite zugreift) — dies ist eine schlechte Praxis, die unter allen Umständen vermieden werden sollte. Weitere Details finden Sie unter [Erkennung von Browsern mithilfe des User-Agent-Strings (UA Sniffing)](/de/docs/Web/HTTP/Guides/Browser_detection_using_the_user_agent).

## Eigene Feature-Erkennungstests schreiben

In diesem Abschnitt schauen wir uns an, wie Sie Ihre eigenen Feature-Erkennungstests in sowohl CSS als auch JavaScript implementieren können.

### CSS

Sie können Tests für CSS-Features schreiben, indem Sie in JavaScript auf die Existenz von _[element.style.property](/de/docs/Web/API/HTMLElement/style)_ (z. B. `paragraph.style.rotate`) testen.

Ein klassisches Beispiel könnte darin bestehen, zu testen, ob die [Subgrid](/de/docs/Web/CSS/Guides/Grid_layout/Subgrid)-Unterstützung in einem Browser vorhanden ist; für Browser, die den `subgrid`-Wert für {{cssxref("grid-template-columns")}} und {{cssxref("grid-template-rows")}} unterstützen, können wir Subgrid in unserem Layout verwenden. Für Browser, die dies nicht tun, könnten wir ein reguläres Grid verwenden, das gut funktioniert, aber nicht so cool aussieht.

Anhand dieses Beispiels könnten wir ein Subgrid-Stylesheet einbinden, wenn der Wert unterstützt wird, und ein reguläres Grid-Stylesheet, wenn nicht. Dazu könnten wir zwei Stylesheets im Kopf unserer HTML-Datei einbinden: eins für alle Styling, und eins, das das Standardlayout implementiert, wenn Subgrid nicht unterstützt wird:

```html
<link href="basic-styling.css" rel="stylesheet" />
<link class="conditional" href="grid-layout.css" rel="stylesheet" />
```

Hier behandelt `basic-styling.css` alle Styling, die wir jedem Browser geben wollen. Wir haben zwei zusätzliche CSS-Dateien, `grid-layout.css` und `subgrid-layout.css`, die das CSS enthalten, das wir abhängig von den Unterstützungsebenen der Browser selektiv anwenden wollen.

Wir verwenden JavaScript, um die Unterstützung für den Subgrid-Wert zu testen, und aktualisieren dann das `href` unseres bedingten Stylesheets basierend auf der Browserunterstützung.

Wir können ein `<script></script>` zu unserem Dokument hinzufügen, gefüllt mit dem folgenden JavaScript

```js
const conditional = document.querySelector(".conditional");
if (CSS.supports("grid-template-columns", "subgrid")) {
  conditional.setAttribute("href", "subgrid-layout.css");
}
```

In unserer bedingten Anweisung testen wir, ob die Eigenschaft {{cssxref("grid-template-columns")}} den `subgrid`-Wert mithilfe von [`CSS.supports()`](/de/docs/Web/API/CSS/supports_static) unterstützt.

#### @supports

CSS hat einen nativen Mechanismus zur Feature-Erkennung: die {{cssxref("@supports")}} Anweisung. Dies funktioniert ähnlich wie [Media Queries](/de/docs/Web/CSS/Guides/Media_queries), außer dass anstelle von CSS selektiv anzuwenden, je nach einer Medienfunktion wie Auflösung, Bildschirmbreite oder {{Glossary("aspect_ratio", "Bildseitenverhältnis")}}, es CSS selektiv anwendet, abhängig davon, ob ein CSS-Feature unterstützt wird, ähnlich wie `CSS.supports()`.

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

Dieser Anweisungsblock wendet die CSS-Regel nur an, wenn der aktuelle Browser die Regel `grid-template-columns: subgrid;` unterstützt. Damit eine Bedingung mit einem Wert funktioniert, müssen Sie eine komplette Deklaration (nicht nur einen Eigenschaftsnamen) einschließen und KEIN Semikolon am Ende hinzufügen.

`@supports` hat auch `AND`, `OR` und `NOT` Logik verfügbar — der andere Block verwendet das reguläre Grid-Layout, wenn die Subgrid-Option nicht verfügbar ist:

```css
@supports not (grid-template-columns: subgrid) {
  /* rules in here */
}
```

Dies ist bequemer als das vorherige Beispiel — wir können alle unsere Feature-Erkennung in CSS durchführen, ohne dass JavaScript notwendig ist, und wir können die gesamte Logik in einer einzigen CSS-Datei handhaben, wodurch HTTP-Anfragen reduziert werden. Aus diesem Grund ist es die bevorzugte Methode zur Bestimmung der Browserunterstützung für CSS-Features.

### JavaScript

Wir haben bereits früher ein Beispiel für einen JavaScript-Feature-Erkennungstest gesehen. Im Allgemeinen werden solche Tests in einem von einigen gängigen Mustern durchgeführt.

Gängige Muster für nachweisbare Features sind:

- Mitglieder eines Objekts
  - : Überprüfen Sie, ob eine bestimmte Methode oder Eigenschaft (typischerweise ein Einstiegspunkt in die Nutzung der API oder eines anderen von Ihnen erkannten Features) im übergeordneten `Object` existiert.

    Unser früheres Beispiel verwendet dieses Muster, um die [Geolocation](/de/docs/Web/API/Geolocation_API)-Unterstützung zu erkennen, indem das [`navigator`](/de/docs/Web/API/Navigator) Objekt auf ein `geolocation`-Mitglied getestet wird:

    ```js
    if ("geolocation" in navigator) {
      // Access navigator.geolocation APIs
    }
    ```

- Eigenschaften eines Elements
  - : Erstellen Sie ein Element im Speicher mit [`Document.createElement()`](/de/docs/Web/API/Document/createElement) und überprüfen Sie dann, ob eine Eigenschaft darauf existiert.

    Dieses Beispiel zeigt einen Weg, die Unterstützung der [Canvas API](/de/docs/Web/API/Canvas_API) zu erkennen:

    ```js
    function supportsCanvas() {
      return !!document.createElement("canvas").getContext;
    }

    if (supportsCanvas()) {
      // Create and draw on canvas elements
    }
    ```

    > [!NOTE]
    > Das doppelte `NOT` im obigen Beispiel (`!!`) ist eine Möglichkeit, einen Rückgabewert zu einem "richtigen" booleschen Wert zu zwingen, anstatt eines {{Glossary("Truthy", "Truthy")}}/{{Glossary("Falsy", "Falsy")}} Wertes, der die Ergebnisse verfälschen könnte.

- Spezifische Rückgabewerte einer Methode an einem Element
  - : Erstellen Sie ein Element im Speicher mit [`Document.createElement()`](/de/docs/Web/API/Document/createElement) und überprüfen Sie dann, ob eine Methode darauf existiert. Falls ja, prüfen Sie, welchen Wert sie zurückgibt.

- Beibehaltung eines zugewiesenen Eigenschaftswerts durch ein Element
  - : Erstellen Sie ein Element im Speicher mit [`Document.createElement()`](/de/docs/Web/API/Document/createElement), setzen Sie eine Eigenschaft auf einen bestimmten Wert und überprüfen Sie dann, ob dieser Wert beibehalten wird.

Bedenken Sie, dass einige Features jedoch als nicht erkennbar bekannt sind. In diesen Fällen müssen Sie einen anderen Ansatz verwenden, wie die Verwendung eines {{Glossary("Polyfill", "Polyfills")}}.

#### matchMedia

Wir wollten auch das JavaScript-Feature [`Window.matchMedia`](/de/docs/Web/API/Window/matchMedia) an diesem Punkt erwähnen. Dies ist eine Eigenschaft, die es Ihnen ermöglicht, Media Query-Tests innerhalb von JavaScript auszuführen. Es sieht so aus:

```js
if (window.matchMedia("(width <= 480px)").matches) {
  // run JavaScript in here.
}
```

Als Beispiel verwendet unser [Snapshot](https://github.com/chrisdavidmills/snapshot) Demo dies, um die Brick-JavaScript-Bibliothek selektiv anzuwenden und zu verwenden, um das UI-Layout zu handhaben, aber nur für das kleine Bildschirm-Layout (480px breit oder weniger). Wir verwenden zuerst das `media` Attribut, um das Brick-CSS nur dann auf die Seite anzuwenden, wenn die Seitenbreite 480px oder weniger beträgt:

```html
<link href="dist/brick.css" rel="stylesheet" media="(width <= 480px)" />
```

Wir verwenden dann `matchMedia()` mehrmals in dem JavaScript, um Brick-Navigationsfunktionen nur dann auszuführen, wenn wir uns im kleinen Bildschirm-Layout befinden (in größeren Bildschirm-Layouts kann alles auf einmal gesehen werden, daher müssen wir nicht zwischen verschiedenen Ansichten navigieren).

```js
if (window.matchMedia("(width <= 480px)").matches) {
  deck.shuffleTo(1);
}
```

## Zusammenfassung

Dieser Artikel behandelte die Feature-Erkennung in angemessenem Detail, indem die Hauptkonzepte vorgestellt wurden und gezeigt wurde, wie Sie Ihre eigenen Feature-Erkennungstests implementieren können.

Als nächstes werden wir uns mit automatisiertem Testen befassen.

{{PreviousMenuNext("Learn_web_development/Extensions/Testing/HTML_and_CSS","Learn_web_development/Extensions/Testing/Automated_testing", "Learn_web_development/Extensions/Testing")}}
