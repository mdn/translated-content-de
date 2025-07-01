---
title: Implementierung der Feature-Erkennung
short-title: Feature detection
slug: Learn_web_development/Extensions/Testing/Feature_detection
l10n:
  sourceCommit: 63cbf204323f117a2a80c7aa6273e50253ab9d07
---

{{PreviousMenuNext("Learn_web_development/Extensions/Testing/HTML_and_CSS","Learn_web_development/Extensions/Testing/Automated_testing", "Learn_web_development/Extensions/Testing")}}

Feature-Erkennung bedeutet, herauszufinden, ob ein Browser einen bestimmten Codeblock unterstützt, und je nach Ausgabe (Unterstützung oder Nichtunterstützung) anderen Code auszuführen, damit der Browser immer eine funktionierende Erfahrung bieten kann, anstatt in einigen Browsern abzustürzen/Fehler zu erzeugen. Dieser Artikel beschreibt, wie Sie Ihre eigene einfache Feature-Erkennung schreiben, wie Sie eine Bibliothek zur Beschleunigung der Implementierung verwenden und native Funktionen zur Feature-Erkennung wie `@supports`.

<table>
  <tbody>
    <tr>
      <th scope="row">Voraussetzungen:</th>
      <td>
        Vertrautheit mit den Kernsprachen <a href="/de/docs/Learn_web_development/Core/Structuring_content">HTML</a>,
        <a href="/de/docs/Learn_web_development/Core/Styling_basics">CSS</a> und
        <a href="/de/docs/Learn_web_development/Core/Scripting">JavaScript</a>; eine Vorstellung von den
        hochrangigen
        <a
          href="/de/docs/Learn_web_development/Extensions/Testing/Introduction"
          >Prinzipien des browserübergreifenden Testens</a
        >.
      </td>
    </tr>
    <tr>
      <th scope="row">Ziel:</th>
      <td>
        Verständnis des Konzepts der Feature-Erkennung und die Fähigkeit,
        geeignete Lösungen in CSS und JavaScript zu implementieren.
      </td>
    </tr>
  </tbody>
</table>

## Das Konzept der Feature-Erkennung

Die Idee hinter der Feature-Erkennung ist, dass Sie einen Test durchführen können, um festzustellen, ob ein Feature im aktuellen Browser unterstützt wird, und dann bedingt Code ausführen, um eine akzeptable Erfahrung sowohl in Browsern, die das Feature _unterstützen_, als auch in Browsern, die es _nicht unterstützen_, zu bieten. Wenn Sie dies nicht tun, funktionieren Browser, die die Funktionen, die Sie in Ihrem Code verwenden, nicht unterstützen, möglicherweise nicht richtig oder schlagen vollständig fehl, was eine schlechte Benutzererfahrung schafft.

Lassen Sie uns rekapitulieren und das Beispiel betrachten, das wir in unserem Artikel [JavaScript-Debugging und Fehlerbehandlung](/de/docs/Learn_web_development/Core/Scripting/Debugging_JavaScript#feature_detection) angesprochen haben — die [Geolocation-API](/de/docs/Web/API/Geolocation_API) (die verfügbare Standortdaten für das Gerät, auf dem der Webbrowser ausgeführt wird, bereitstellt) hat den Haupteinstiegspunkt zur Nutzung, eine `geolocation`-Eigenschaft auf dem globalen [Navigator](/de/docs/Web/API/Navigator)-Objekt. Daher können Sie feststellen, ob der Browser Geolokalisierung unterstützt oder nicht, indem Sie etwas Ähnliches wie das folgende verwenden:

```js
if ("geolocation" in navigator) {
  navigator.geolocation.getCurrentPosition((position) => {
    // show the location on a map, such as the Google Maps API
  });
} else {
  // Give the user a choice of static maps
}
```

Bevor wir fortfahren, möchten wir eines vorwegnehmen — verwechseln Sie Feature-Erkennung nicht mit **Browser-Sniffing** (Erkennung, welcher spezifische Browser auf die Seite zugreift) — dies ist eine schlechte Praxis, die unter allen Umständen vermieden werden sollte. Siehe [Browsererkennung mit der User-Agent-Zeichenkette (UA-Sniffing)](/de/docs/Web/HTTP/Guides/Browser_detection_using_the_user_agent) für mehr Details.

## Eigene Feature-Erkennungstests schreiben

In diesem Abschnitt betrachten wir, wie Sie Ihre eigenen Feature-Erkennungstests sowohl in CSS als auch in JavaScript implementieren können.

### CSS

Sie können Tests für CSS-Funktionen schreiben, indem Sie in JavaScript auf die Existenz von _[element.style.property](/de/docs/Web/API/HTMLElement/style)_ (z.B. `paragraph.style.rotate`) prüfen.

Ein klassisches Beispiel könnte sein, die Unterstützung für [Subgrid](/de/docs/Web/CSS/CSS_grid_layout/Subgrid) in einem Browser zu testen; für Browser, die den `subgrid` Wert für einen Subgrid-Wert für [`grid-template-columns`](/de/docs/Web/CSS/grid-template-columns) und [`grid-template-rows`](/de/docs/Web/CSS/grid-template-rows) unterstützen, könnten wir Subgrid in unserem Layout verwenden. Für Browser, die dies nicht tun, könnten wir ein reguläres Grid verwenden, das gut funktioniert, aber nicht so cool aussieht.

Mit diesem Beispiel könnten wir ein Subgrid-CSS einfügen, wenn der Wert unterstützt wird, und ein reguläres Grid-CSS, wenn nicht. Dazu könnten wir zwei Stylesheets im Head unserer HTML-Datei einfügen: eines für alle Styles und eines, das das Standardlayout implementiert, wenn Subgrid nicht unterstützt wird:

```html
<link href="basic-styling.css" rel="stylesheet" />
<link class="conditional" href="grid-layout.css" rel="stylesheet" />
```

Hier behandelt `basic-styling.css` alle Styles, die wir jedem Browser geben möchten. Wir haben zwei zusätzliche CSS-Dateien, `grid-layout.css` und `subgrid-layout.css`, die das CSS enthalten, das wir abhängig von den Unterstützungsniveaus selektiv auf Browser anwenden möchten.

Wir verwenden JavaScript, um die Unterstützung für den Subgrid-Wert zu testen, und aktualisieren dann das `href` unseres bedingten Stylesheets basierend auf der Browserunterstützung.

Wir können unserem Dokument ein `<script></script>` hinzufügen, gefüllt mit dem folgenden JavaScript:

```js
const conditional = document.querySelector(".conditional");
if (CSS.supports("grid-template-columns", "subgrid")) {
  conditional.setAttribute("href", "subgrid-layout.css");
}
```

In unserer Bedingung prüfen wir, ob die {{cssxref("grid-template-columns")}}-Eigenschaft den `subgrid` Wert mit [`CSS.supports()`](/de/docs/Web/API/CSS/supports_static) unterstützt.

#### @supports

CSS verfügt über einen nativen Mechanismus zur Feature-Erkennung: die {{cssxref("@supports")}}-Regel. Diese funktioniert ähnlich wie [Media Queries](/de/docs/Web/CSS/CSS_media_queries), außer dass sie anstelle des selektiven Anwendens von CSS abhängig von einer Medienfunktion wie einer Auflösung, Bildschirmbreite oder dem {{Glossary("aspect_ratio", "Seitenverhältnis")}} CSS selektiv anwendet, je nachdem ob eine CSS-Funktion unterstützt wird, ähnlich wie `CSS.supports()`.

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

Dieser At-Regel-Block wendet die CSS-Regel nur dann an, wenn der aktuelle Browser die `grid-template-columns: subgrid;` Deklaration unterstützt. Damit eine Bedingung mit einem Wert funktioniert, müssen Sie eine vollständige Deklaration (nicht nur einen Eigenschaftsnamen) einfügen und dürfen das Semikolon am Ende NICHT einschließen.

`@supports` bietet auch `AND`, `OR` und `NOT` Logik — der andere Block wendet das reguläre Grid-Layout an, wenn die Subgrid-Option nicht verfügbar ist:

```css
@supports not (grid-template-columns: subgrid) {
  /* rules in here */
}
```

Dies ist praktischer als das vorherige Beispiel — wir können unsere gesamte Feature-Erkennung in CSS durchführen, kein JavaScript erforderlich, und wir können die gesamte Logik in einer einzigen CSS-Datei verwalten, wodurch HTTP-Anfragen reduziert werden. Aus diesem Grund ist es die bevorzugte Methode zur Bestimmung der Browserunterstützung für CSS-Funktionen.

### JavaScript

Wir haben bereits ein Beispiel für einen JavaScript-Feature-Erkennungstest gesehen. In der Regel werden solche Tests nach einem der wenigen gängigen Muster durchgeführt.

Häufige Muster für nachweisbare Funktionen sind:

- Mitglieder eines Objekts
  - : Überprüfen Sie, ob eine bestimmte Methode oder Eigenschaft (typischerweise ein Einstiegspunkt in die Nutzung der API oder eine andere Funktion, deren Unterstützung Sie erkennen) in ihrem übergeordneten `Object` existiert.

    Unser vorheriges Beispiel verwendete dieses Muster, um die [Geolocation](/de/docs/Web/API/Geolocation_API)-Unterstützung zu erkennen, indem das [`navigator`](/de/docs/Web/API/Navigator)-Objekt auf ein `geolocation`-Mitglied getestet wurde:

    ```js
    if ("geolocation" in navigator) {
      // Access navigator.geolocation APIs
    }
    ```

- Eigenschaften eines Elements
  - : Erstellen Sie ein Element im Speicher mit [`Document.createElement()`](/de/docs/Web/API/Document/createElement) und prüfen Sie dann, ob eine Eigenschaft daran existiert.

    Dieses Beispiel zeigt eine Möglichkeit, die Unterstützung der [Canvas-API](/de/docs/Web/API/Canvas_API) zu erkennen:

    ```js
    function supports_canvas() {
      return !!document.createElement("canvas").getContext;
    }

    if (supports_canvas()) {
      // Create and draw on canvas elements
    }
    ```

    > [!NOTE]
    > Das doppelte `NOT` im obigen Beispiel (`!!`) ist eine Möglichkeit, einen Rückgabewert in einen „richtigen“ Booleschen Wert zu zwingen, anstatt einen {{Glossary("Truthy", "Truthy")}}/{{Glossary("Falsy", "Falsy")}} Wert, der die Ergebnisse verfälschen könnte.

- Spezifische Rückgabewerte einer Methode auf einem Element
  - : Erstellen Sie ein Element im Speicher mit [`Document.createElement()`](/de/docs/Web/API/Document/createElement) und prüfen Sie dann, ob eine Methode daran existiert. Falls ja, überprüfen Sie, welchen Wert sie zurückgibt.

- Beibehaltung des zugewiesenen Eigenschaftswerts durch ein Element
  - : Erstellen Sie ein Element im Speicher mit [`Document.createElement()`](/de/docs/Web/API/Document/createElement), setzen Sie eine Eigenschaft auf einen bestimmten Wert und prüfen Sie dann, ob der Wert beibehalten wird.

Beachten Sie, dass einige Funktionen jedoch als undetektierbar bekannt sind. In diesen Fällen müssen Sie einen anderen Ansatz verwenden, z. B. die Verwendung eines {{Glossary("Polyfill", "Polyfills")}}.

#### matchMedia

Wir wollten an dieser Stelle auch die JavaScript-Funktion [`Window.matchMedia`](/de/docs/Web/API/Window/matchMedia) erwähnen. Dies ist eine Eigenschaft, die es Ihnen ermöglicht, Media-Query-Tests innerhalb von JavaScript auszuführen. Es sieht so aus:

```js
if (window.matchMedia("(width <= 480px)").matches) {
  // run JavaScript in here.
}
```

Als Beispiel verwendet unser [Snapshot](https://github.com/chrisdavidmills/snapshot) Demo diese Funktion, um selektiv die Brick-JavaScript-Bibliothek anzuwenden und damit das UI-Layout zu verwalten, aber nur für das kleine Bildschirm-Layout (480px breit oder weniger). Zuerst verwenden wir das `media` Attribut, um das Brick-CSS nur dann auf die Seite anzuwenden, wenn die Seitenbreite 480px oder weniger beträgt:

```html
<link href="dist/brick.css" rel="stylesheet" media="(width <= 480px)" />
```

Wir verwenden dann mehrmals `matchMedia()` im JavaScript, um die Brick-Navigationsfunktionen nur dann auszuführen, wenn wir uns im kleinen Bildschirm-Layout befinden (in breiteren Bildschirm-Layouts kann alles auf einmal gesehen werden, daher müssen wir nicht zwischen verschiedenen Ansichten navigieren).

```js
if (window.matchMedia("(width <= 480px)").matches) {
  deck.shuffleTo(1);
}
```

## Zusammenfassung

Dieser Artikel behandelte die Feature-Erkennung in angemessener Detailtiefe, ging die Hauptkonzepte durch und zeigte Ihnen, wie Sie Ihre eigenen Feature-Erkennungstests implementieren können.

Als nächstes werden wir uns mit automatisierten Tests befassen.

{{PreviousMenuNext("Learn_web_development/Extensions/Testing/HTML_and_CSS","Learn_web_development/Extensions/Testing/Automated_testing", "Learn_web_development/Extensions/Testing")}}
