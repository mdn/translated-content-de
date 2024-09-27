---
title: Implementierung der Feature-Erkennung
slug: Learn/Tools_and_testing/Cross_browser_testing/Feature_detection
l10n:
  sourceCommit: cde9330e9bbaddea72febf44dcc3a7db16fe1a11
---

{{LearnSidebar}}{{PreviousMenuNext("Learn/Tools_and_testing/Cross_browser_testing/Accessibility","Learn/Tools_and_testing/Cross_browser_testing/Automated_testing", "Learn/Tools_and_testing/Cross_browser_testing")}}

Die Feature-Erkennung beinhaltet das Überprüfen, ob ein Browser einen bestimmten Block von Code unterstützt, und das Ausführen eines anderen Codes, je nachdem, ob er dies tut (oder nicht), sodass der Browser immer eine funktionierende Erfahrung bieten kann, anstatt in einigen Browsern abzustürzen oder Fehlermeldungen anzuzeigen. Dieser Artikel beschreibt, wie Sie Ihre eigene einfache Feature-Erkennung schreiben, wie Sie eine Bibliothek zur Beschleunigung der Implementierung verwenden, und native Funktionen zur Feature-Erkennung wie `@supports`.

<table>
  <tbody>
    <tr>
      <th scope="row">Voraussetzungen:</th>
      <td>
        Vertrautheit mit den Kernsprachen <a href="/de/docs/Learn/HTML">HTML</a>,
        <a href="/de/docs/Learn/CSS">CSS</a> und
        <a href="/de/docs/Learn/JavaScript">JavaScript</a>; eine Vorstellung von den grundlegenden
        <a
          href="/de/docs/Learn/Tools_and_testing/Cross_browser_testing/Introduction"
          >Prinzipien des Cross-Browser-Testings</a
        >.
      </td>
    </tr>
    <tr>
      <th scope="row">Zielsetzung:</th>
      <td>
        Das Konzept der Feature-Erkennung zu verstehen und in der Lage zu sein, geeignete Lösungen in CSS und JavaScript zu implementieren.
      </td>
    </tr>
  </tbody>
</table>

## Das Konzept der Feature-Erkennung

Die Idee hinter der Feature-Erkennung ist, dass Sie einen Test durchführen können, um festzustellen, ob eine Funktion im aktuellen Browser unterstützt wird, und dann bedingt Code ausführen können, um sowohl in Browsern, die die Funktion _unterstützen_, als auch in Browsern, die sie _nicht unterstützen_, eine akzeptable Erfahrung zu bieten. Wenn Sie dies nicht tun, können Browser, die die in Ihrem Code verwendeten Funktionen nicht unterstützen, Ihre Websites möglicherweise nicht richtig anzeigen oder ganz ausfallen, was zu einer schlechten Benutzererfahrung führt.

Lassen Sie uns das Beispiel, das wir in unserem [Umgang mit häufigen JavaScript-Problemen](/de/docs/Learn/Tools_and_testing/Cross_browser_testing/JavaScript#feature_detection) angesprochen haben, noch einmal aufgreifen — die [Geolocation API](/de/docs/Web/API/Geolocation_API) (die verfügbare Standortdaten für das Gerät bereitstellt, auf dem der Webbrowser läuft) hat den Haupteinstiegspunkt für ihre Verwendung, eine `geolocation`-Eigenschaft, die auf dem globalen [Navigator](/de/docs/Web/API/Navigator)-Objekt verfügbar ist. Daher können Sie feststellen, ob der Browser Geolokalisierung unterstützt, indem Sie etwas wie das Folgende verwenden:

```js
if ("geolocation" in navigator) {
  navigator.geolocation.getCurrentPosition(function (position) {
    // show the location on a map, such as the Google Maps API
  });
} else {
  // Give the user a choice of static maps
}
```

Bevor wir fortfahren, möchten wir eine Sache vorwegnehmen — verwechseln Sie Feature-Erkennung nicht mit **browser sniffing** (Erkennung, welcher spezifische Browser auf die Seite zugreift) — dies ist eine schlechte Praxis, die unter allen Umständen vermieden werden sollte. Siehe [don't browser sniff](/de/docs/Learn/Tools_and_testing/Cross_browser_testing/JavaScript#dont_browser_sniff) für weitere Details.

## Schreiben Sie Ihre eigenen Feature-Erkennungstests

In diesem Abschnitt werden wir uns mit der Implementierung Ihrer eigenen Feature-Erkennungstests in CSS und JavaScript befassen.

### CSS

Sie können Tests für CSS-Funktionen schreiben, indem Sie im JavaScript auf das Vorhandensein von _[element.style.property](/de/docs/Web/API/HTMLElement/style)_ (z. B. `paragraph.style.rotate`) überprüfen.

Ein klassisches Beispiel könnte darin bestehen, die Unterstützung von [Subgrid](/de/docs/Web/CSS/CSS_grid_layout/Subgrid) in einem Browser zu testen; für Browser, die den `subgrid`-Wert für `grid-template-columns` und `grid-template-rows` unterstützen, können wir Subgrid in unserem Layout verwenden. Für Browser, die dies nicht tun, könnten wir ein normales Grid verwenden, das gut funktioniert, aber nicht so cool aussieht.

Anhand dieses Beispiels könnten wir ein Subgrid-Stylesheet einschließen, wenn der Wert unterstützt wird, und ein reguläres Grid-Stylesheet, wenn nicht. Dazu könnten wir zwei Stylesheets im Kopf unserer HTML-Datei einschließen: eines für alle Stile und eines, das das Standardlayout implementiert, wenn Subgrid nicht unterstützt wird:

```html
<link href="basic-styling.css" rel="stylesheet" />
<link class="conditional" href="grid-layout.css" rel="stylesheet" />
```

Hier behandelt `basic-styling.css` alle Stile, die wir jedem Browser geben möchten. Wir haben zwei zusätzliche CSS-Dateien, `grid-layout.css` und `subgrid-layout.css`, die das CSS enthalten, das wir je nach Unterstützung in Browsern selektiv anwenden möchten.

Wir verwenden JavaScript, um die Unterstützung für den Subgrid-Wert zu testen, und aktualisieren dann das `href` unseres bedingten Stylesheets basierend auf der Browserunterstützung.

Wir können ein `<script></script>` in unser Dokument einfügen, gefüllt mit folgendem JavaScript

```js
const conditional = document.querySelector(".conditional");
if (CSS.supports("grid-template-columns", "subgrid")) {
  conditional.setAttribute("href", "subgrid-layout.css");
}
```

In unserer bedingten Anweisung testen wir, ob die {{cssxref("grid-template-columns")}}-Eigenschaft den `subgrid`-Wert unterstützt, und verwenden dazu [`CSS.supports()`](/de/docs/Web/API/CSS/supports_static).

#### @supports

CSS hat einen nativen Mechanismus zur Feature-Erkennung: die {{cssxref("@supports")}}-At-Regel. Dies funktioniert ähnlich wie [media queries](/de/docs/Web/CSS/CSS_media_queries), außer dass es CSS selektiv anwenden kann, abhängig von einer CSS-Funktion, ähnlich wie `CSS.supports()`.

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

Dieser At-Regel-Block wendet die CSS-Regel nur dann an, wenn der aktuelle Browser die Deklaration `grid-template-columns: subgrid;` unterstützt. Damit eine Bedingung mit einem Wert funktioniert, müssen Sie eine vollständige Deklaration (nicht nur einen Eigenschaftsnamen) angeben und das Semikolon am Ende NICHT einschließen.

`@supports` hat auch `AND`-, `OR`- und `NOT`-Logik zur Verfügung — der andere Block wendet das reguläre Grid-Layout an, wenn die Subgrid-Option nicht verfügbar ist:

```css
@supports not (grid-template-columns: subgrid) {
  /* rules in here */
}
```

Dies ist bequemer als das vorherige Beispiel — wir können die gesamte Feature-Erkennung in CSS durchführen, ohne JavaScript erforderlich ist, und wir können die gesamte Logik in einer einzelnen CSS-Datei behandeln, wodurch HTTP-Anfragen reduziert werden. Aus diesem Grund ist es die bevorzugte Methode, die Browserunterstützung für CSS-Funktionen zu bestimmen.

### JavaScript

Wir haben bereits zuvor ein Beispiel für einen JavaScript-Feature-Erkennungstest gesehen. Im Allgemeinen werden solche Tests nach einem von wenigen üblichen Mustern durchgeführt.

Gemeinsame Muster für erkennbare Funktionen umfassen:

- Mitglieder eines Objekts

  - : Überprüfen Sie, ob eine bestimmte Methode oder Eigenschaft (typischerweise ein Einstiegspunkt in die Verwendung der API oder einer anderen Funktion, die Sie erkennen) im übergeordneten `Object` vorhanden ist.

    Unser früheres Beispiel verwendete dieses Muster, um [Geolocation](/de/docs/Web/API/Geolocation_API)-Unterstützung zu erkennen, indem das [`navigator`](/de/docs/Web/API/Navigator)-Objekt auf ein `geolocation`-Mitglied getestet wurde:

    ```js
    if ("geolocation" in navigator) {
      // Access navigator.geolocation APIs
    }
    ```

- Eigenschaften eines Elements

  - : Erstellen Sie ein Element im Speicher mit [`Document.createElement()`](/de/docs/Web/API/Document/createElement) und überprüfen Sie dann, ob eine Eigenschaft darauf existiert.

    Dieses Beispiel zeigt einen Weg zur Erkennung der [Canvas API](/de/docs/Web/API/Canvas_API)-Unterstützung:

    ```js
    function supports_canvas() {
      return !!document.createElement("canvas").getContext;
    }

    if (supports_canvas()) {
      // Create and draw on canvas elements
    }
    ```

    > [!NOTE]
    > Das doppelte `NOT` im obigen Beispiel (`!!`) ist eine Möglichkeit, einen Rückgabewert zu erzwingen, ein "echter" boolescher Wert zu werden, anstatt ein [Truthy](/de/docs/Glossary/Truthy)/[Falsy](/de/docs/Glossary/Falsy) Wert, der die Ergebnisse verfälschen könnte.

- Spezifische Rückgabewerte einer Methode auf einem Element

  - : Erstellen Sie ein Element im Speicher mit [`Document.createElement()`](/de/docs/Web/API/Document/createElement) und überprüfen Sie dann, ob eine Methode darauf existiert. Wenn dies der Fall ist, überprüfen Sie, welchen Wert es zurückgibt. Sehen Sie sich den Feature-Test in [Dive into HTML Video Format detection](https://diveinto.html5doctor.com/detect.html#video-formats) für ein Beispiel für dieses Muster an.

- Beibehaltung des zugewiesenen Eigenschaftswerts durch ein Element

  - : Erstellen Sie ein Element im Speicher mit [`Document.createElement()`](/de/docs/Web/API/Document/createElement), setzen Sie eine Eigenschaft auf einen bestimmten Wert und überprüfen Sie dann, ob der Wert beibehalten wird. Sehen Sie sich den Feature-Test in [Dive into HTML \<input> type detection](https://diveinto.html5doctor.com/detect.html#input-types) für ein Beispiel für dieses Muster an.

Bedenken Sie, dass einige Funktionen jedoch als nicht erkennbar bekannt sind. In diesen Fällen müssen Sie einen anderen Ansatz verwenden, z. B. einen [Polyfill](/de/docs/Glossary/Polyfill).

#### matchMedia

Wir wollten an dieser Stelle auch die JavaScript-Funktion [`Window.matchMedia`](/de/docs/Web/API/Window/matchMedia) erwähnen. Dies ist eine Eigenschaft, die es Ihnen ermöglicht, Media-Query-Tests innerhalb von JavaScript auszuführen. Es sieht so aus:

```js
if (window.matchMedia("(max-width: 480px)").matches) {
  // run JavaScript in here.
}
```

Als Beispiel verwendet unser [Snapshot](https://github.com/chrisdavidmills/snapshot)-Demo es, um selektiv die Brick-JavaScript-Bibliothek zu verwenden und sie zur Steuerung des UI-Layouts zu verwenden, aber nur für das kleine Bildschirm-Layout (480px breit oder weniger). Wir verwenden zuerst das `media`-Attribut, um das Brick-CSS nur dann auf die Seite anzuwenden, wenn sie 480px breit oder weniger ist:

```html
<link
  href="dist/brick.css"
  rel="stylesheet"
  media="all and (max-width: 480px)" />
```

Wir verwenden dann `matchMedia()` mehrmals im JavaScript, um Brick-Navigationsfunktionen nur dann auszuführen, wenn wir uns im kleinen Bildschirm-Layout befinden (in breiteren Bildschirm-Layouts kann alles auf einmal gesehen werden, deshalb müssen wir nicht zwischen verschiedenen Ansichten navigieren).

```js
if (window.matchMedia("(max-width: 480px)").matches) {
  deck.shuffleTo(1);
}
```

## Zusammenfassung

Dieser Artikel behandelte die Feature-Erkennung in einem vernünftigen Maß an Detail, ging durch die Hauptkonzepte und zeigte Ihnen, wie Sie Ihre eigenen Feature-Erkennungstests implementieren können.

Als Nächstes beginnen wir mit der Betrachtung von automatisierten Tests.

{{PreviousMenuNext("Learn/Tools_and_testing/Cross_browser_testing/Accessibility","Learn/Tools_and_testing/Cross_browser_testing/Automated_testing", "Learn/Tools_and_testing/Cross_browser_testing")}}
