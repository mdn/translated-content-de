---
title: "<geolocation>: Das Geolocation-Element"
slug: Web/HTML/Reference/Elements/geolocation
l10n:
  sourceCommit: 3712f845b54b2754b2b550c7d7dca18f0277c0ad
---

{{SeeCompatTable}}

Das **`<geolocation>`** [HTML](/de/docs/Web/HTML)-Element erstellt ein interaktives Steuerelement, mit dem der Benutzer seine Standortdaten mit der Seite teilen kann.

Es bietet:

- Eine intuitive, vom Browser definierte Benutzeroberfläche.
- Einen Prozess zur Bearbeitung der erforderlichen Berechtigungen für die `geolocation`-Funktion.
- API-Funktionen zum Zugriff auf Standortdaten und zum Reagieren auf empfangene Standortdaten und Berechtigungsänderungen.

## Attribute

Dieses Element umfasst die [globalen Attribute](/de/docs/Web/HTML/Reference/Global_attributes).

- `autolocate` {{experimental_inline}}
  - : Ein boolesches Attribut, das beim Setzen auf `true` angibt, dass der Browser die Standortdaten sofort abrufen soll, wenn das `<geolocation>`-Element gerendert wird, sofern die Berechtigung zuvor erteilt wurde. Wenn es auf `false` gesetzt ist, werden die Standortdaten erst abgerufen, wenn der Benutzer das Steuerelement aktiviert. Standardwert ist `false`.

    Wenn die Berechtigung zuvor nicht erteilt wurde, hat dieses Attribut keine Wirkung.

- `watch` {{experimental_inline}}
  - : Ein boolesches Attribut, das beim Setzen auf `true` angibt, dass der Browser die Standortdaten immer dann abrufen sollte, wenn sich die Position des Geräts des Benutzers ändert. Wenn es auf `false` gesetzt ist, werden die Standortdaten nur einmal abgerufen. Standardwert ist `false`.

## Beschreibung

Das `<geolocation>`-Element bietet ein deklaratives, vom Browser definiertes Steuerelement zum Teilen von Standortdaten. In Chrome beispielsweise verfügt die Taste über ein "Stecknadel"-Symbol und intuitiven Text ("Ort verwenden" in englischen Inhalten).

Es ermöglicht auch eine intuitive Verwaltung der Benutzerberechtigungen.
Beispielsweise können Benutzer in Chrome, wenn sie zuvor die Erlaubnis zur Nutzung der Standortdaten verweigert oder den Berechtigungsdialog ohne Entscheidung geschlossen haben, die Taste erneut drücken, um ihre Wahl zu aktualisieren.
In Fällen, in denen sie zuvor die Erlaubnis verweigert haben, werden nachfolgende Dialoge sie daran erinnern, dass sie zuvor die Standortfreigabe nicht erlaubt haben, und fragen, ob sie weiterhin nicht erlauben oder es erlauben möchten.

Ein wesentlicher Aspekt des `<geolocation>`-Elements ist, dass es die bewusste Wahl des Benutzers widerspiegelt und die mögliche Nutzung blockiert, die den Benutzer dazu verleiten könnte, seine Standortdaten unwissentlich zu übermitteln (siehe [`<geolocation> blocking`](#geolocation_blocking) für weitere Informationen).

Die DOM-API-Schnittstelle des Elements, [`HTMLGeolocationElement`](/de/docs/Web/API/HTMLGeolocationElement), bietet Funktionen zum Zugriff auf zurückgegebene Positionsdaten, aktuellen Berechtigungsstatus und Fehler, falls die Datenabfrage erfolglos war, wodurch die Menge an JavaScript-Logik, die geschrieben werden muss, reduziert wird. Es stehen auch Ereignisse zur Verfügung, um Code als Reaktion auf empfangene Standortdaten, Änderungen im Berechtigungsstatus und Benutzerinteraktionen mit dem Berechtigungsdialog auszuführen.

> [!NOTE]
> Aus Leistungsgründen sind maximal drei `<geolocation>`-Elemente auf einer Seite erlaubt. Wenn dieses Kontingent überschritten wird, sind alle `<geolocation>`-Elemente in ihrer Funktionalität deaktiviert.

### Beziehung zur Geolocation API

Die [Geolocation API](/de/docs/Web/API/Geolocation_API) bietet eine ältere Alternative zur Verwaltung von Standortdaten. Diese API hat einige Mängel, die das `<geolocation>`-Element zu lösen versucht, insbesondere dass die Benutzeroberfläche und die zugrundeliegende Logik zum Anfordern der Daten jedes Mal von Grund auf neu implementiert werden müssen, und dass die Verwaltung von Berechtigungen unintuitiv sein kann.

Das `<geolocation>`-Element nutzt im Hintergrund Funktionen der Geolocation API. Standardmäßig fordert der Browser Standortdaten einmal an, als ob die Methode [`Geolocation.getCurrentPosition()`](/de/docs/Web/API/Geolocation/getCurrentPosition) aufgerufen worden wäre. Wenn jedoch das `watch`-Attribut auf `true` gesetzt ist, aktualisiert der Browser die Daten, sobald sich die Position des Geräts ändert, als ob [`Geolocation.watchPosition()`](/de/docs/Web/API/Geolocation/watchPosition) aufgerufen worden wäre.

Wenn Daten erfolgreich abgerufen werden, sind sie in der [`HTMLGeolocationElement.position`](/de/docs/Web/API/HTMLGeolocationElement/position)-Eigenschaft verfügbar, die ein [`GeolocationPosition`](/de/docs/Web/API/GeolocationPosition)-Objekt enthält. Wenn die Datenabfrage erfolglos ist, sind Fehlerinformationen in der [`HTMLGeolocationElement.error`](/de/docs/Web/API/HTMLGeolocationElement/error)-Eigenschaft verfügbar, die ein [`GeolocationPositionError`](/de/docs/Web/API/GeolocationPositionError)-Objekt enthält.

### Sprachwahl für die Schaltfläche einstellen

Das globale [`lang`](/de/docs/Web/HTML/Reference/Global_attributes/lang)-Attribut wird vom `<geolocation>`-Element verwendet, um eine Sprache für seinen gerenderten Text auszuwählen. Dies bedeutet, dass Sie ein `lang`-Attribut direkt am `<geolocation>`-Element oder an einem seiner Vorfahren setzen können, um dem Browser mitzuteilen, welche Sprache für die Beschriftung der Schaltfläche verwendet werden soll.

Wenn kein geeignetes `lang`-Attribut gesetzt ist, wird die bevorzugte Spracheinstellung des Browsers verwendet.

### Einschluss von Fallback-Inhalten

Sie können Fallback-Inhalte zwischen den öffnenden und schließenden Tags des `<geolocation>`-Elements einschließen, die angezeigt werden, wenn es nicht unterstützt wird. Beispielsweise könnten Sie eine "Nicht unterstützt"-Nachricht einfügen:

```html
<geolocation>
  <p>Your browser doesn't support the Geolocation element.</p>
</geolocation>
```

Eine bessere Lösung in der realen Welt könnte jedoch sein, ein reguläres {{htmlelement("button")}}-Element einzuschließen, das die Geolocation API verwendet, um Standortdaten abzurufen:

```html
<geolocation>
  <button id="fallback">Use location</button>
</geolocation>
```

### `<geolocation>`-Blockierung

Ein wichtiger Gedanke bei der Gestaltung des `<geolocation>`-Elements ist, dass es die bewusste Entscheidung des Benutzers widerspiegeln sollte, Positionsinformationen preiszugeben, und böswillige Akteure daran hindern sollte, Benutzer dazu zu bringen, es beispielsweise über [Clickjacking](/de/docs/Web/Security/Attacks/Clickjacking) zu aktivieren. Aus diesem Grund führt der Browser eine Aufzeichnung sogenannter **"Blocker-Gründe"** für jedes gerenderte Element.

Wenn ein Blocker auf ein `<geolocation>`-Element aktiv ist, wird es daran gehindert, zu funktionieren (geblockt), entweder vorübergehend oder dauerhaft, je nach Grund. Wenn ein `<geolocation>`-Element blockiert ist, wird es als ungültig bezeichnet. Sie können überprüfen, ob es ungültig ist, indem Sie die [`HTMLGeolocationElement.isValid`](/de/docs/Web/API/HTMLGeolocationElement/isValid)-Eigenschaft abfragen. Sie können auch den Grund, warum es ungültig ist, über die [`HTMLGeolocationElement.invalidReason`](/de/docs/Web/API/HTMLGeolocationElement/invalidReason)-Eigenschaft abrufen — siehe diese Seite für eine vollständige Liste der möglichen Gründe.

### Einschränkungen bei der Stilgestaltung

Das `<geolocation>`-Element hat mehrere Einschränkungen hinsichtlich der CSS-Stile, die darauf angewendet werden können. Einige dieser Einschränkungen sind darauf ausgelegt, grundlegende Barrierefreiheit sicherzustellen, und führen dazu, dass die Taste deaktiviert wird, wenn sie nicht eingehalten werden. Einige erzwingen bestimmte Werte oder Wertranges für verschiedene Eigenschaften.

Jede Eigenschaften, die nicht in den folgenden Unterabschnitten aufgelistet sind, oder logisch einem physischen Eigenschaftswert entsprechen, der in den folgenden Unterabschnitten aufgelistet ist, werden ignoriert, wenn sie auf das `<geolocation>`-Element gesetzt werden.

#### Barrierefreiheitsbeschränkungen

Die gerenderte `<geolocation>`-Taste wird deaktiviert (das bedeutet, dass das Drücken keine Auswirkung hat), wenn die folgenden Einschränkungen nicht eingehalten werden:

- Das [Farbkontrast](/de/docs/Web/Accessibility/Guides/Understanding_WCAG/Perceivable/Color_contrast)-Verhältnis zwischen {{cssxref("color")}} und {{cssxref("background-color")}} muss mindestens 3:1 betragen.
- Die {{cssxref("font-size")}} darf nicht kleiner als der Wert `small` sein (im Fall von Schlüsselwortwerten) oder als ihr berechneter Wert (im Fall anderer Werttypen).

#### Wertbeschränkungen

Die folgenden CSS-Werteinschränkungen werden auf das `<geolocation>`-Element angewendet. Wenn versucht wird, diese Eigenschaften auf Werte außerhalb der angegebenen Einschränkungen am `<geolocation>`-Element zu setzen, wird der Wert an die Einschränkung (im Fall einer genauen Werteinschränkung) oder an den nächstgelegenen berechneten Wert, obere oder untere Grenze, angepasst (im Fall einer Bereichsbeschränkung).

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
- {{cssxref("letter-spacing")}}
  - : Zwischen `-0.05em` und `0.2em`, inklusive.
- {{cssxref("min-height")}}
  - : `1em` oder größer.
- {{cssxref("max-height")}}
  - : `3em` oder weniger. `none` ist ein akzeptierter Wert.
- {{cssxref("min-width")}}
  - : Der berechnete Wert von `fit-content` oder weniger.
- {{cssxref("border-width")}}
  - : `1em` oder weniger.

#### Komplexe Einschränkungen

Die folgenden Einschränkungen sind komplexer als einfache Werteinschränkungen:

- Block-Richtungspolsterung
  - : Wenn die {{cssxref("block-size")}} auf `auto` gesetzt ist, sind die {{cssxref("padding-block-start")}} und {{cssxref("padding-block-end")}} (und die entsprechenden physikalischen Eigenschaften für den aktuellen [Schreibmodus](/de/docs/Web/CSS/Reference/Properties/writing-mode)) auf ein Maximum von `1em` beschränkt und müssen gleich sein.
- Inline-Richtungspolsterung
  - : Wenn die {{cssxref("inline-size")}} auf `auto` gesetzt ist, sind die {{cssxref("padding-inline-start")}} und {{cssxref("padding-inline-end")}} (und die entsprechenden physikalischen Eigenschaften für den aktuellen [Schreibmodus](/de/docs/Web/CSS/Reference/Properties/writing-mode)) auf ein Maximum von `5em` beschränkt und müssen gleich sein.

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

## Barrierefreiheit

Das `<geolocation>`-Element hat einen zugänglichen Namen, der in der [eingestellten Sprache](#sprachwahl_für_die_schaltfläche_einstellen) verfasst ist. Es hat auch eine [`role`](/de/docs/Web/Accessibility/ARIA/Reference/Roles) von [`button`](/de/docs/Web/Accessibility/ARIA/Reference/Roles/button_role), sodass es von Bildschirmlesern als Schaltfläche erkannt wird.

Darüber hinaus hat das `<geolocation>`-Element einen Standardwert von `0` im [`tabindex`](/de/docs/Web/HTML/Reference/Global_attributes/tabindex), sodass es sich hinsichtlich der Tastaturfokussierung wie eine echte `<button>` verhält.

Konsultieren Sie abschließend den Abschnitt [Barrierefreiheitsbeschränkungen](#barrierefreiheitsbeschränkungen) für Informationen zu Stileinschränkungen, die auf das `<geolocation>`-Element angewendet werden, um grundlegende Barrierefreiheitanforderungen durchzusetzen.

## Beispiele

### Einfache Nutzung

Dieses Beispiel verwendet das `<geolocation>`-Element, um Ihre aktuelle Position abzurufen, die unter der Schaltfläche in einem {{htmlelement("p")}}-Element ausgegeben wird. Das Beispiel verwendet auch eine reguläre `<button>`-Alternative, um die Standortdaten in nicht unterstützenden Browsern abzurufen.

#### HTML

Wir binden ein `<geolocation>`-Element mit einer `<button>`-Alternative ein, die in nicht unterstützenden Browsern gerendert wird. Wir fügen auch ein `<p>`-Element hinzu, um Standortdaten und Fehler auszugeben.

```html
<geolocation>
  <button id="fallback">Use location</button>
</geolocation>
<p id="output"></p>
```

#### JavaScript

In unserem Skript beginnen wir, indem wir eine Referenz zum Ausgabeelement `<p>` erfassen. Dann erkennen wir, ob das `<geolocation>`-Element unterstützt wird, indem wir `typeof HTMLGeolocationElement === "function"` testen:

- Wenn es unterstützt wird, holen wir zuerst eine Referenz auf das `<geolocation>`-Element und dann fügen wir einen [`location`](/de/docs/Web/API/HTMLGeolocationElement/location_event)-Ereignis-Listener hinzu.
  Wenn die Taste gedrückt wird und die Daten abgerufen werden, gibt der Listener die (Breiten-, Längen-)Koordinaten im Ausgabeelement `<p>` aus (abgerufen über die [`position`](/de/docs/Web/API/HTMLGeolocationElement/position)-Eigenschaft) oder eine Fehlermeldung, wenn die Datenabfrage nicht erfolgreich war (abgerufen über die [`error`](/de/docs/Web/API/HTMLGeolocationElement/error)-Eigenschaft).
- Wenn es nicht unterstützt wird, erfassen wir eine Referenz auf das Fallback-`<button>`-Element und rufen und drucken die gleichen Daten ab, außer dass wir dieses Mal einen `click`-Ereignis-Listener auf der Schaltfläche verwenden und einen [`Geolocation.getCurrentPosition()`](/de/docs/Web/API/Geolocation/getCurrentPosition)-Aufruf, um die Daten abzurufen.

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

Sehen Sie sich diesen Code [live in Aktion](https://mdn.github.io/dom-examples/geolocation-element/basic-example/) an ([Quellcode](https://github.com/mdn/dom-examples/tree/main/geolocation-element/basic-example)). Sie können auch eine Version dieses Beispiels finden, die das `watch`-Attribut am `<geolocation>`-Element umfasst und daher Standortdaten jedes Mal abruft, wenn sich die Gerätestellung des Benutzers ändert (sehen Sie es [live in Aktion](https://mdn.github.io/dom-examples/geolocation-element/basic-watch-example/), und den [Quellcode](https://github.com/mdn/dom-examples/tree/main/geolocation-element/basic-watch-example)).

Versuchen Sie, die Demos in einem unterstützten Browser und einem nicht unterstützten Browser anzuzeigen, wenn möglich, und beachten Sie den Unterschied im Ablauf des Berechtigungsdialogs, wenn Sie sich entscheiden, die Berechtigung zur Nutzung von `geolocation` zu erlauben oder zu verweigern.

Für eine Schritt-für-Schritt-Anleitung zu einem vollständigerem Beispiel, das Standortdaten verwendet, um eine Karte Ihrer lokalen Umgebung zu erstellen, siehe die [`HTMLGeolocationElement`](/de/docs/Web/API/HTMLGeolocationElement)-Referenzseite.

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
          >Flussinhalt</a
        >,
        <a href="/de/docs/Web/HTML/Guides/Content_categories#phrasing_content"
          >Phraseninhalt</a
        >, interaktiver Inhalt, greifbarer Inhalt.
      </td>
    </tr>
    <tr>
      <th scope="row">Zulässiger Inhalt</th>
      <td>Jeder geeignete transparente Fallback-Inhalt.</td>
    </tr>
    <tr>
      <th scope="row">Tag-Auslassung</th>
      <td>Keine, sowohl der Start- als auch der Endtag sind obligatorisch.</td>
    </tr>
    <tr>
      <th scope="row">Erlaubte Eltern</th>
      <td>Jedes Element, das Phraseninhalt akzeptiert.</td>
    </tr>
    <tr>
      <th scope="row">Implizierte ARIA-Rolle</th>
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
- [Permissions API](/de/docs/Web/API/Permissions_API)
- [Einführung in das `<geolocation>` HTML-Element](https://developer.chrome.com/blog/geolocation-html-element) auf developer.chrome.com (2026)
