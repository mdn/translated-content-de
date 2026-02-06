---
title: "<geolocation>: Das Geolocation-Element"
slug: Web/HTML/Reference/Elements/geolocation
l10n:
  sourceCommit: fce59e0706ab0114d9968c23722dccfacaebf998
---

{{SeeCompatTable}}

Das **`<geolocation>`** [HTML](/de/docs/Web/HTML)-Element erstellt eine interaktive Steuerung, mit der der Benutzer seine Standortdaten mit der Seite teilen kann.

Es bietet:

- Eine intuitive, vom Browser definierte Benutzeroberfläche.
- Einen Prozess zur Verwaltung der notwendigen Berechtigungen für die `geolocation`-Funktion.
- API-Funktionen zum Zugriff auf Standortdaten und zur Reaktion auf empfangene Standortdaten sowie Berechtigungsänderungen.

## Attribute

Dieses Element enthält die [globalen Attribute](/de/docs/Web/HTML/Reference/Global_attributes).

- `autolocate` {{experimental_inline}}
  - : Ein boolesches Attribut, das, wenn es auf `true` gesetzt ist, angibt, dass der Browser die Standortdaten sofort abrufen soll, wenn das `<geolocation>`-Element gerendert wird, vorausgesetzt, die Berechtigung wurde vorher erteilt. Wenn auf `false` gesetzt, werden Standortdaten erst abgerufen, wenn der Benutzer die Steuerung aktiviert. Standardmäßig auf `false`.

    Wenn die Berechtigung nicht vorher erteilt wurde, hat dieses Attribut keine Wirkung.

- `watch` {{experimental_inline}}
  - : Ein boolesches Attribut, das, wenn es auf `true` gesetzt ist, angibt, dass der Browser Standortdaten abrufen soll, wann immer sich die Position des Geräts des Benutzers ändert. Wenn auf `false` gesetzt, werden Standortdaten nur einmal abgerufen. Standardmäßig auf `false`.

## Beschreibung

Das `<geolocation>`-Element bietet eine deklarative, vom Browser definierte Steuerung zum Teilen von Standortdaten. In Chrome verfügt der Button beispielsweise über ein "Kartennadel"-Symbol und intuitiven Text ("Use location" in englischen Inhalten).

Es ermöglicht auch eine intuitive Verwaltung von Benutzerberechtigungen.
Wenn beispielsweise der Benutzer in Chrome zuvor verweigert hat, die Standortdaten zuzulassen, oder den Berechtigungsdialog ohne Entscheidung geschlossen hat, kann er den Button erneut drücken, um seine Wahl zu aktualisieren.
In Fällen, in denen die Berechtigung zuvor verweigert wurde, informieren nachfolgende Dialoge den Benutzer darüber, dass er zuvor das Teilen der Standortdaten nicht erlaubt hat, und fragen ihn, ob er dies weiterhin nicht erlauben oder es doch erlauben möchte.

Ein Schlüsselelement des `<geolocation>`-Elements ist, dass es die bewusste Entscheidung des Benutzers widerspiegelt und eine eventuelle Nutzung blockiert, die den Benutzer dazu verleiten könnte, seine Standortdaten ungewollt bereitzustellen (siehe [`<geolocation> blocking`](#geolocation_blocking) für weitere Informationen).

Die DOM API-Schnittstelle des Elements, [`HTMLGeolocationElement`](/de/docs/Web/API/HTMLGeolocationElement), bietet Funktionen zum Zugriff auf zurückgegebene Positionsdaten, aktuellen Berechtigungsstatus und Fehler, falls das Abrufen der Daten nicht erfolgreich war. Dadurch wird die Menge des zu schreibenden JavaScript-Codes reduziert. Es sind auch Ereignisse verfügbar, um Code als Reaktion auf empfangene Standortdaten, Änderungen im Berechtigungsstatus und Benutzerinteraktionen mit dem Berechtigungsdialog auszuführen.

> [!NOTE]
> Aus Leistungsgründen sind maximal drei `<geolocation>`-Elemente auf einer Seite erlaubt. Wird dieses Kontingent überschritten, werden alle `<geolocation>`-Elemente deaktiviert.

### Beziehung zur Geolocation API

Die [Geolocation API](/de/docs/Web/API/Geolocation_API) bietet eine ältere Alternative zur Handhabung von Standortdaten. Diese API hat einige Mängel, die das `<gelocation>`-Element zu beheben versucht, insbesondere dass die Benutzeroberfläche und die zugrunde liegende Logik zur Anforderung der Daten jedes Mal von Grund auf neu implementiert werden müssen und die Handhabung der Berechtigungen unintuitiv sein kann.

Das `<geolocation>`-Element verwendet im Hintergrund Funktionen der Geolocation API. Standardmäßig fordert der Browser Standortdaten einmal an, als ob die Methode [`Geolocation.getCurrentPosition()`](/de/docs/Web/API/Geolocation/getCurrentPosition) aufgerufen wurde. Wenn jedoch das `watch`-Attribut auf `true` gesetzt ist, aktualisiert der Browser die Daten jedes Mal, wenn sich die Position des Geräts ändert, als ob [`Geolocation.watchPosition()`](/de/docs/Web/API/Geolocation/watchPosition) aufgerufen wurde.

Wenn Daten erfolgreich abgerufen werden, sind sie in der [`HTMLGeolocationElement.position`](/de/docs/Web/API/HTMLGeolocationElement/position) Eigenschaft verfügbar, die ein [`GeolocationPosition`](/de/docs/Web/API/GeolocationPosition) Objekt enthält. Wenn das Abrufen von Daten nicht erfolgreich ist, sind Fehlerinformationen in der [`HTMLGeolocationElement.error`](/de/docs/Web/API/HTMLGeolocationElement/error) Eigenschaft verfügbar, die ein [`GeolocationPositionError`](/de/docs/Web/API/GeolocationPositionError) Objekt enthält.

### Sprache des Buttons einstellen

Das globale [`lang`](/de/docs/Web/HTML/Reference/Global_attributes/lang)-Attribut wird vom `<geolocation>`-Element verwendet, um eine Sprache für den gerenderten Text auszuwählen. Das bedeutet, dass Sie ein `lang`-Attribut direkt auf dem `<geolocation>`-Element oder auf einem seiner Vorfahren setzen können, um dem Browser mitzuteilen, welche Sprache für die Buttonbeschriftung verwendet werden soll.

Wenn kein geeignetes `lang`-Attribut gesetzt ist, wird die bevorzugte Spracheinstellung des Browsers verwendet.

### Fallback-Inhalt einfügen

Sie können Fallback-Inhalt zwischen den Öffnungs- und Schlusstags des `<geolocation>`-Elements einschließen, der angezeigt wird, wenn es nicht unterstützt wird. Zum Beispiel könnten Sie eine "Nicht unterstützt" Nachricht einfügen:

```html
<geolocation>
  <p>Your browser doesn't support the Geolocation element.</p>
</geolocation>
```

Eine bessere realitätsnahe Lösung könnte jedoch darin bestehen, ein reguläres {{htmlelement("button")}}-Element einzuschließen, das die Geolocation API verwendet, um Standortdaten abzurufen:

```html
<geolocation>
  <button id="fallback">Use location</button>
</geolocation>
```

### `<geolocation>`-Blocking

Eine Schlüsselidee hinter der Gestaltung des `<geolocation>`-Elements ist, dass es eine bewusste Entscheidung des Nutzers sein sollte, Positionsinformationen offenzulegen, und dass verhindert werden sollte, dass böswillige Akteure Nutzer dazu verleiten, es zu aktivieren, z.B. durch [Clickjacking](/de/docs/Web/Security/Attacks/Clickjacking). Aus diesem Grund führt der Browser für jedes gerenderte Element Aufzeichnungen über sogenannte **Blocker-Gründe**.

Wenn ein Blocker auf einem `<geolocation>`-Element aktiv ist, wird dessen Funktion (zeitweise oder dauerhaft, je nach Grund) verhindert. Wenn ein `<geolocation>`-Element blockiert ist, gilt es als ungültig. Sie können überprüfen, ob es ungültig ist, indem Sie die [`HTMLGeolocationElement.isValid`](/de/docs/Web/API/HTMLGeolocationElement/isValid) Eigenschaft abfragen. Außerdem können Sie den Grund, warum es ungültig ist, über die [`HTMLGeolocationElement.invalidReason`](/de/docs/Web/API/HTMLGeolocationElement/invalidReason) Eigenschaft ermitteln — siehe diese Seite für eine vollständige Liste möglicher Gründe.

### Styling-Einschränkungen

Das `<geolocation>`-Element unterliegt mehreren Einschränkungen bezüglich der CSS-Stile, die darauf angewendet werden können. Einige dieser Einschränkungen sollen grundlegende Zugänglichkeit erzwingen und führen dazu, dass der Button deaktiviert wird, wenn sie nicht eingehalten werden. Andere setzen bestimmte Werte oder Wertebereiche für verschiedene Eigenschaften durch.

Jegliche Eigenschaften, die nicht in den folgenden Unterabschnitten aufgelistet oder logisch äquivalent zu einer in den folgenden Unterabschnitten aufgeführten physischen Eigenschaft sind, werden ignoriert, wenn sie auf das `<geolocation>`-Element gesetzt werden.

#### Zugänglichkeitsbeschränkungen

Der gerenderte `<geolocation>`-Button wird deaktiviert (was bedeutet, dass das Drücken keinen Effekt hat), wenn die folgenden Einschränkungen nicht eingehalten werden:

- Das [Farbkontrast](/de/docs/Web/Accessibility/Guides/Understanding_WCAG/Perceivable/Color_contrast)-Verhältnis zwischen {{cssxref("color")}} und {{cssxref("background-color")}} muss mindestens 3:1 betragen.
- Die {{cssxref("font-size")}} darf nicht kleiner als der `small`-Wert (bei Schlüsselwortwerten) oder sein berechneter Wert (bei anderen Werttypen) sein.

#### Wertbeschränkungen

Die folgenden CSS-Eigenschaftenwertbeschränkungen werden auf das `<geolocation>`-Element angewendet. Wenn versucht wird, diese Eigenschaften auf Werte außerhalb der aufgelisteten Beschränkungen auf dem `<geolocation>`-Element zu setzen, wird der Wert so angepasst, dass er der Beschränkung (im Falle einer genauen Wertbeschränkung) oder dem nächstgelegenen berechneten Wert oberhalb oder unterhalb entspricht (im Falle einer Bereichsbeschränkung).

- {{cssxref("opacity")}}
  - : `1.0`
- {{cssxref("line-height")}}
  - : `normal`
- {{cssxref("white-space")}}
  - : `nowrap`
- {{cssxref("user-select")}}
  - : `none`
- {{cssxref("appearance")}}
  - : `auto`
- {{cssxref("box-sizing")}}
  - : `content-box`
- {{cssxref("vertical-align")}}
  - : `middle`
- {{cssxref("text-emphasis")}}
  - : `initial`
- {{cssxref("text-shadow")}}
  - : `initial`
- {{cssxref("outline-offset")}}
  - : `0` oder größer.
- {{cssxref("font-weight")}}
  - : `200` oder größer.
- {{cssxref("word-spacing")}}
  - : Zwischen `0` und `0.5em`, inklusive.
- {{cssxref("letter-spacing")}}
  - : Zwischen `-0.05em` und `0.2em`, inklusive.
- {{cssxref("min-height")}}
  - : `1em` oder größer.
- {{cssxref("max-height")}}
  - : `3em` oder weniger. `none` ist ein akzeptierter Wert.
- {{cssxref("min-width")}}
  - : Der berechnete Wert von `fit-content` oder kleiner.
- {{cssxref("border-width")}}
  - : `1em` oder weniger.

#### Komplexe Einschränkungen

Die folgenden Einschränkungen sind komplexer als einfache Wertbeschränkungen:

- Blockrichtung-Polsterung
  - : Wenn die {{cssxref("block-size")}} auf `auto` gesetzt ist, sind die {{cssxref("padding-block-start")}} und {{cssxref("padding-block-end")}} (und gleichwertige physische Eigenschaften für den aktuellen [Schreibmodus](/de/docs/Web/CSS/Reference/Properties/writing-mode)) auf maximal `1em` beschränkt und müssen gleich sein.
- Inline-Richtung-Polsterung
  - : Wenn die {{cssxref("inline-size")}} auf `auto` gesetzt ist, sind die {{cssxref("padding-inline-start")}} und {{cssxref("padding-inline-end")}} (und gleichwertige physische Eigenschaften für den aktuellen [Schreibmodus](/de/docs/Web/CSS/Reference/Properties/writing-mode)) auf maximal `5em` beschränkt und müssen gleich sein.

#### Eigenschaften, die normal gesetzt werden können

Die folgenden CSS-Eigenschaften können normal verwendet werden:

- {{cssxref("font-kerning")}}
- {{cssxref("font-optical-sizing")}}
- {{cssxref("font-stretch")}}
- {{cssxref("font-synthesis-weight")}}
- {{cssxref("font-synthesis-style")}}
- {{cssxref("font-synthesis-small-caps")}}
- {{cssxref("font-feature-settings")}}
- {{cssxref("forced-color-adjust")}}
- {{cssxref("text-rendering")}}
- {{cssxref("align-self")}}
- {{cssxref("anchor-name")}}
- {{cssxref("aspect-ratio")}}
- {{cssxref("border")}}, {{cssxref("border-top")}}, {{cssxref("border-right")}}, {{cssxref("border-bottom")}}, und {{cssxref("border-left")}}
- {{cssxref("clear")}}
- {{cssxref("color-scheme")}}
- {{cssxref("contain-intrinsic-width")}}
- {{cssxref("contain-intrinsic-height")}}
- {{cssxref("container-name")}}
- {{cssxref("container-type")}}
- {{cssxref("counter-reset")}}, {{cssxref("counter-increment")}}, und {{cssxref("counter-set")}}
- {{cssxref("flex")}}, {{cssxref("flex-grow")}}, {{cssxref("flex-shrink")}}, und {{cssxref("flex-basis")}}
- {{cssxref("float")}}
- {{cssxref("height")}}
- {{cssxref("isolation")}}
- {{cssxref("justify-self")}}
- {{cssxref("left")}}
- {{cssxref("order")}}
- {{cssxref("orphans")}}
- {{cssxref("outline")}}, {{cssxref("outline-color")}}, und {{cssxref("outline-style")}}
- {{cssxref("overflow-anchor")}}
- {{cssxref("overscroll-behavior")}}, {{cssxref("overscroll-behavior-inline")}}, {{cssxref("overscroll-behavior-block")}}, {{cssxref("overscroll-behavior-x")}}, und {{cssxref("overscroll-behavior-y")}}
- {{cssxref("page")}}
- {{cssxref("position")}}
- {{cssxref("position-anchor")}}
- {{cssxref("right")}}
- {{cssxref("scroll-margin")}}, {{cssxref("scroll-margin-top")}}, {{cssxref("scroll-margin-right")}}, {{cssxref("scroll-margin-bottom")}}, und {{cssxref("scroll-margin-left")}}
- {{cssxref("scroll-padding")}}, {{cssxref("scroll-padding-top")}}, {{cssxref("scroll-padding-right")}}, {{cssxref("scroll-padding-bottom")}}, {{cssxref("scroll-padding-left")}}, {{cssxref("scroll-padding-inline-start")}}, {{cssxref("scroll-padding-block-start")}}, {{cssxref("scroll-padding-block-start")}}, {{cssxref("scroll-padding-inline-end")}}, und {{cssxref("scroll-padding-block-end")}}
- {{cssxref("text-spacing-trim")}}
- {{cssxref("text-transform")}}
- {{cssxref("top")}}
- {{cssxref("visibility")}}
- {{cssxref("x")}}
- {{cssxref("y")}}
- {{cssxref("ruby-position")}}
- {{cssxref("user-select")}}
- {{cssxref("width")}}
- {{cssxref("will-change")}}
- {{cssxref("z-index")}}

## Zugänglichkeit

Das `<geolocation>`-Element hat einen zugänglichen Namen, der in der [eingestellten Sprache](#sprache_des_buttons_einstellen) geschrieben ist. Es hat auch eine [`role`](/de/docs/Web/Accessibility/ARIA/Reference/Roles) von [`button`](/de/docs/Web/Accessibility/ARIA/Reference/Roles/button_role), sodass es von Screenreadern als Button erkannt wird.

Darüber hinaus hat das `<geolocation>`-Element einen standardmäßigen [`tabindex`](/de/docs/Web/HTML/Reference/Global_attributes/tabindex)-Wert von `0`, sodass es sich wie ein echtes `<button>` bezüglich Tastaturfokus verhält.

Schließlich verweisen Sie auf den Abschnitt [Zugänglichkeitsbeschränkungen](#zugänglichkeitsbeschränkungen) für Informationen zu Styling-Einschränkungen, die auf das `<geolocation>`-Element angewendet werden, um grundlegende Zugänglichkeitsanforderungen durchzusetzen.

## Beispiele

### Grundlegendes Anwendungsbeispiel

Dieses Beispiel verwendet das `<geolocation>`-Element, um Ihren aktuellen Standort abzurufen, der unter dem Button in einem {{htmlelement("p")}}-Element ausgegeben wird. Das Beispiel verwendet auch einen regulären `<button>`-Fallback, um die Standortdaten in nicht unterstützenden Browsern abzurufen.

#### HTML

Wir fügen ein `<geolocation>`-Element mit einem darin verschachtelten `<button>`-Fallback ein, das in Browsern gerendert wird, die `<geolocation>` nicht unterstützen. Wir fügen auch ein `<p>` hinzu, um Standortdaten und Fehlerausgaben auszugeben.

```html
<geolocation>
  <button id="fallback">Use location</button>
</geolocation>
<p id="output"></p>
```

#### JavaScript

In unserem Skript holen wir uns zunächst eine Referenz auf das Ausgabeelement `<p>`. Dann überprüfen wir, ob das `<geolocation>`-Element unterstützt wird, indem wir `typeof HTMLGeolocationElement === "function"` testen:

- Wenn es unterstützt wird, holen wir zunächst eine Referenz auf das `<geolocation>`-Element und fügen dann einen [`location`](/de/docs/Web/API/HTMLGeolocationElement/location_event) Ereignis-Listener hinzu.
  Wenn der Button gedrückt wird und die Daten abgerufen werden, druckt der Listener die (Lat, Long) Koordinaten in das Ausgabeelement `<p>` (abgerufen über die [`position`](/de/docs/Web/API/HTMLGeolocationElement/position) Eigenschaft) oder eine Fehlermeldung, falls das Abrufen der Daten nicht erfolgreich war (abgerufen über die [`error`](/de/docs/Web/API/HTMLGeolocationElement/error) Eigenschaft).
- Wenn es nicht unterstützt wird, holen wir eine Referenz auf das Fallback `<button>`-Element und rufen die gleichen Daten ab und drucken sie aus, jedoch diesmal mit einem `click`-Ereignis-Listener auf dem Button und einem [`Geolocation.getCurrentPosition()`](/de/docs/Web/API/Geolocation/getCurrentPosition)-Aufruf, um die Daten abzurufen.

```js
const outputElem = document.querySelector("#output");

if (typeof HTMLGeolocationElement === "function") {
  const geo = document.querySelector("geolocation");
  geo.addEventListener("location", () => {
    if (geo.position) {
      outputElem.textContent += `(${geo.position.coords.latitude},${geo.position.coords.longitude}), `;
    } else if (geo.error) {
      outputElem.textContent += `${geo.error.message}, `;
    }
  });
} else {
  const fallback = document.querySelector("#fallback");
  fallback.addEventListener("click", () => {
    navigator.geolocation.getCurrentPosition(
      (position) => {
        outputElem.textContent += `(${position.coords.latitude}, ${position.coords.longitude}), `;
      },
      (error) => {
        outputElem.textContent += `${error.message}, `;
      },
    );
  });
}
```

#### Ergebnis

Sehen Sie sich diesen Code [live in Aktion](https://mdn.github.io/dom-examples/geolocation-element/basic-example/) an ([Quellcode](https://github.com/mdn/dom-examples/tree/main/geolocation-element/basic-example)). Sie können auch eine Version dieses Beispiels finden, die das `watch`-Attribut auf dem `<geolocation>`-Element enthält und daher Standortdaten jedes Mal abruft, wenn sich die Position des Geräts des Benutzers ändert (sehen Sie es [live in Aktion](https://mdn.github.io/dom-examples/geolocation-element/basic-watch-example/), und den [Quellcode](https://github.com/mdn/dom-examples/tree/main/geolocation-element/basic-watch-example)).

Versuchen Sie, die Demos in einem unterstützten und einem nicht unterstützten Browser anzusehen, wenn möglich, und beachten Sie den Unterschied im Berechtigungsdialog, wenn Sie die Erlaubnis zur Verwendung von `geolocation` erteilen oder verweigern.

Für eine Schritt-für-Schritt-Anleitung zu einem umfassenderen Beispiel, das Standortdaten verwendet, um eine Karte Ihrer Umgebung zu erstellen, sehen Sie sich die [`HTMLGeolocationElement`](/de/docs/Web/API/HTMLGeolocationElement) Referenzseite an.

## Technische Zusammenfassung

<table class="properties">
  <tbody>
    <tr>
      <th scope="row">
        <a href="/de/docs/Web/HTML/Guides/Content_categories"
          >Inhaltskategorien</a
        >
      </th>
      <td>
        <a href="/de/docs/Web/HTML/Guides/Content_categories#flow_content"
          >Fließinhalt</a
        >,
        <a href="/de/docs/Web/HTML/Guides/Content_categories#phrasing_content"
          >Phraseninhalt</a
        >, interaktiver Inhalt, fühlbarer Inhalt.
      </td>
    </tr>
    <tr>
      <th scope="row">Erlaubter Inhalt</th>
      <td>Beliebiger geeigneter transparenter Fallback-Inhalt.</td>
    </tr>
    <tr>
      <th scope="row">Tag-Auslassung</th>
      <td>Keine, sowohl der Starttag als auch der Endtag sind erforderlich.</td>
    </tr>
    <tr>
      <th scope="row">Erlaubte Eltern</th>
      <td>Jedes Element, das Phraseninhalt akzeptiert.</td>
    </tr>
    <tr>
      <th scope="row">Implizite ARIA-Rolle</th>
      <td>
        <a href="https://w3c.github.io/html-aria/#dfn-no-corresponding-role"
          >Keine entsprechende Rolle</a
        >
      </td>
    </tr>
    <tr>
      <th scope="row">Erlaubte ARIA-Rollen</th>
      <td>
        <a href="/de/docs/Web/Accessibility/ARIA/Reference/Roles/button_role"><code>button</code></a>
      </td>
    </tr>
    <tr>
      <th scope="row">DOM-Schnittstelle</th>
      <td>[`HTMLGeolocationElement`](/de/docs/Web/API/HTMLGeolocationElement)</td>
    </tr>
  </tbody>
</table>

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [`HTMLGeolocationElement`](/de/docs/Web/API/HTMLGeolocationElement)
- Die {{httpheader("Permissions-Policy/geolocation", "geolocation")}} [Berechtigungsrichtlinie](/de/docs/Web/HTTP/Guides/Permissions_Policy)
- [Geolocation API](/de/docs/Web/API/Geolocation_API)
- [Berechtigungs-API](/de/docs/Web/API/Permissions_API)
- [Einführung in das `<geolocation>` HTML-Element](https://developer.chrome.com/blog/geolocation-html-element) auf developer.chrome.com (2026)
