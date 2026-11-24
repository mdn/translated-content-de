---
title: "Firefox 161: Versionshinweise für Entwickler (Stable)"
short-title: Firefox 161 (Stable)
slug: Mozilla/Firefox/Releases/161
l10n:
  sourceCommit: 5b678632840c829c7f0ac157372e46cfcb60bc91
---

Dieser Artikel informiert über Änderungen in Firefox 161, die für Entwickler relevant sind.
Firefox 161 wurde am [24. November 2026](https://whattrainisitnow.com/release/?version=161) veröffentlicht.

## Änderungen für Webentwickler

### HTML

Keine nennenswerten Änderungen.

### SVG

- Das Attribut [`referrerpolicy`](/de/docs/Web/SVG/Reference/Attribute/referrerpolicy) wird jetzt für die Elemente {{SVGElement("image")}}, {{SVGElement("script")}} und {{SVGElement("feImage")}} unterstützt, ebenso wie die entsprechenden Eigenschaften [`SVGImageElement.referrerPolicy`](/de/docs/Web/API/SVGImageElement/referrerPolicy), [`SVGScriptElement.referrerPolicy`](/de/docs/Web/API/SVGScriptElement/referrerPolicy) und [`SVGFEImageElement.referrerPolicy`](/de/docs/Web/API/SVGFEImageElement/referrerPolicy).
  Sie steuern, wie viele Referrer-Informationen im Header {{HTTPHeader("Referer")}} gesendet werden, wenn das Element die Ressource abruft, auf die sein Attribut `href` verweist. Dies funktioniert genauso wie das Attribut `referrerpolicy` bei den HTML-Elementen {{HTMLElement("img")}} und {{HTMLElement("script")}}.
  ([Firefox-Bug 2079321](https://bugzil.la/2079321)).

### CSS

- Die CSS-Funktion {{cssxref("random")}} wird jetzt unterstützt. Sie erzeugt einen Zufallswert innerhalb eines angegebenen Bereichs und kann die möglichen Werte optional auf Vielfache einer angegebenen Schrittweite beschränken. Mit einem optionalen Parameter `<random-key>` können mehrere `random()`-Funktionen denselben Zufallsbasiswert verwenden, beispielsweise bei verschiedenen Elementen oder in verschiedenen Eigenschaften. ([Firefox-Bug 2072252](https://bugzil.la/2072252)).
- Die CSS-Funktionen {{cssxref("var")}}, {{cssxref("attr")}} und {{cssxref("env")}} akzeptieren jetzt verschachtelte Funktionen in ihrem ersten Parameter. Beispielsweise werden `var(attr(data-theme-prop type(<custom-ident>)))` und `env(var(--safe-area-block-start))` jetzt unterstützt. ([Firefox-Bug 2080511](https://bugzil.la/2080511)).

### JavaScript

Keine nennenswerten Änderungen.

### HTTP

- [Compression Dictionary Transport](/de/docs/Web/HTTP/Guides/Compression_dictionary_transport) wird jetzt unterstützt. Ein Server kann eine Antwort mit dem Header {{httpheader("Use-As-Dictionary")}} als Wörterbuch kennzeichnen. Der Browser führt das gespeicherte Wörterbuch dann im Header {{httpheader("Available-Dictionary")}} passender Anfragen auf. Der Server kann daraufhin eine Antwort senden, die anhand dieses Wörterbuchs komprimiert wurde, und dafür die Werte `dcb` (Brotli) oder `dcz` (Zstandard) für {{httpheader("Content-Encoding")}} verwenden. Dies kann die Größe von Ressourcen, die sich zwischen Versionen nur wenig ändern, etwa JavaScript-Bundles, erheblich verringern. ([Firefox-Bug 2039320](https://bugzil.la/2039320)).

### APIs

- Die Eigenschaften [`anticipatedConcurrentIncomingUnidirectionalStreams`](/de/docs/Web/API/WebTransport/anticipatedConcurrentIncomingUnidirectionalStreams) und [`anticipatedConcurrentIncomingBidirectionalStreams`](/de/docs/Web/API/WebTransport/anticipatedConcurrentIncomingBidirectionalStreams) des Interfaces `WebTransport` werden jetzt unterstützt. Das gilt auch für die entsprechenden Eigenschaften in `options`, mit denen sie im Konstruktor [`WebTransport()`](/de/docs/Web/API/WebTransport/WebTransport) festgelegt werden können.
  Die Eigenschaften geben jeweils die maximale Anzahl eingehender unidirektionaler beziehungsweise bidirektionaler Streams an, die der Server nach Erwartung der Anwendung gleichzeitig geöffnet haben wird.
  ([Firefox-Bug 2007825](https://bugzil.la/2007825)).
- Die [Clipboard API](/de/docs/Web/API/Clipboard_API) unterstützt jetzt [benutzerdefinierte Zwischenablageformate](/de/docs/Web/API/Clipboard_API#custom_clipboard_formats). Damit können Webanwendungen über [`Clipboard.write()`](/de/docs/Web/API/Clipboard/write) und [`Clipboard.read()`](/de/docs/Web/API/Clipboard/read) eigene Datenformate schreiben und lesen.
  Ein benutzerdefiniertes Format ist ein MIME-Typ mit dem Präfix `"web "`, beispielsweise `"web text/x-my-format"`.
  Benutzerdefinierte Formate können nur von einer Seite gelesen werden, die denselben Ursprung wie die Seite hat, die sie geschrieben hat.
  ([Firefox-Bug 2053725](https://bugzil.la/2053725), [Firefox-Bug 2086505](https://bugzil.la/2086505)).

- Die Eigenschaft [`NavigationTransition.to`](/de/docs/Web/API/NavigationTransition/to) der [Navigation API](/de/docs/Web/API/Navigation_API) wird jetzt unterstützt.
  Sie gibt ein [`NavigationDestination`](/de/docs/Web/API/NavigationDestination)-Objekt für die laufende Navigation zurück. So kann Code außerhalb des Event-Handlers für [`navigate`](/de/docs/Web/API/Navigation/navigate_event) feststellen, wohin die Navigation führt.
  Beispielsweise kann ein Handler für [`navigateerror`](/de/docs/Web/API/Navigation/navigateerror_event) damit melden, welche Navigation fehlgeschlagen ist.
  ([Firefox-Bug 1991959](https://bugzil.la/1991959)).
- Die [CSS Typed Object Model API](/de/docs/Web/API/CSS_Typed_OM_API) wird jetzt unterstützt.
  Damit können Skripte CSS-Werte als typisierte JavaScript-Objekte statt als Zeichenfolgen lesen und schreiben, beispielsweise über [`Element.computedStyleMap()`](/de/docs/Web/API/Element/computedStyleMap) und [`HTMLElement.attributeStyleMap`](/de/docs/Web/API/HTMLElement/attributeStyleMap).
  Die Interfaces für Farbwerte, etwa `CSSColorValue` und `CSSRGB`, werden weder in Firefox noch in anderen Browsern unterstützt.
  ([Firefox-Bug 2089681](https://bugzil.la/2089681)).

#### Medien, WebRTC und Web Audio

- Die Methode [`RTCRtpSender.setParameters()`](/de/docs/Web/API/RTCRtpSender/setParameters) unterstützt jetzt den optionalen Parameter [`setParameterOptions`](/de/docs/Web/API/RTCRtpSender/setParameters#setparameteroptions).
  Damit können Sie den Encoder im selben Aufruf, mit dem Sie Encoding-Parameter des Senders wie `active` oder `scaleResolutionDownBy` ändern, auffordern, für ein Encoding einen Keyframe zu erzeugen. Empfänger müssen nach der Änderung dann keinen Keyframe mehr anfordern.
  ([Firefox-Bug 2057265](https://bugzil.la/2057265)).

### WebDriver-Konformität (WebDriver BiDi, Marionette)

#### WebDriver BiDi

- Der Befehl `script.callFunction` wurde so aktualisiert, dass er einen Fehler vom Typ `invalid argument` zurückgibt, wenn ein Argument oder der `this`-Wert einen lokalen Wert mit einem unbekannten `type` enthält. Dies gilt auch für verschachtelte Werte. Zuvor wurden solche Werte stillschweigend durch `undefined` ersetzt. ([Firefox-Bug 2084105](https://bugzil.la/2084105)).
- Die Befehle `script.evaluate` und `script.callFunction` wurden so aktualisiert, dass sie ein bereits gesetztes Benutzeraktivierungs-Flag bei einem Aufruf mit `userActivation: false` nicht mehr zurücksetzen. ([Firefox-Bug 2084107](https://bugzil.la/2084107)).
- Ein Problem wurde behoben, bei dem die Befehle `browsingContext.navigate` und `browsingContext.reload` hängen bleiben oder mit einem falschen Fehler fehlschlagen konnten, wenn eine Navigation begann, während das vorherige Dokument noch geladen wurde. ([Firefox-Bug 2088640](https://bugzil.la/2088640)).
- Ein Leistungsproblem wurde behoben, durch das jeder Aufruf des Befehls `browsingContext.setViewport` im Laufe einer Sitzung langsamer wurde. ([Firefox-Bug 2084362](https://bugzil.la/2084362)).
- Der Befehl `network.continueRequest` wurde so korrigiert, dass beim Ersetzen des Bodys einer Anfrage, die bereits einen Body hatte, auch der Header `Content-Length` aktualisiert wird. Zuvor konnte der Server einen abgeschnittenen oder unvollständigen Body empfangen. ([Firefox-Bug 2088814](https://bugzil.la/2088814)).

## Änderungen für Add-on-Entwickler

## Experimentelle Web-Features

Diese Features sind in Firefox 161 enthalten, aber standardmäßig deaktiviert.
Um sie auszuprobieren, suchen Sie auf der Seite `about:config` nach der jeweiligen Einstellung und setzen Sie sie auf `true`.
Weitere solche Features finden Sie auf der Seite [Experimentelle Features](/de/docs/Mozilla/Firefox/Experimental_features).

- **Eigenschaft `margin-trim`**: `layout.css.margin-trim.enabled`

  Die Eigenschaft {{cssxref("margin-trim")}} wird jetzt für Block-Container unterstützt und ist in Nightly standardmäßig aktiviert. Sie entfernt die Ränder von Kindelementen entlang der Blockachse am Anfang, am Ende oder an beiden Seiten des Containers, während die Ränder zwischen Geschwisterelementen erhalten bleiben.
  ([Firefox-Bug 2051240](https://bugzil.la/2051240)).

- **Dokumentübergreifende View Transitions** (Nightly): `dom.viewTransitions.cross-document.enabled`

  [Dokumentübergreifende View Transitions](/de/docs/Web/API/View_Transition_API/Using#basic_mpa_view_transition) sind in Nightly jetzt standardmäßig aktiviert.
  Mit ihnen lässt sich der Übergang zwischen Seiten desselben Ursprungs in einer mehrseitigen Anwendung animieren.
  ([Firefox-Bug 2084340](https://bugzil.la/2084340)).

- **Render-Blocking** (Nightly): `dom.element.blocking.enabled`

  Das Attribut `blocking="render"` der Elemente {{HTMLElement("link",,"blocking")}}, {{HTMLElement("script",,"blocking")}} und {{HTMLElement("style",,"blocking")}} ist in Nightly jetzt standardmäßig aktiviert.
  Damit können Sie das Rendering der Seite blockieren, bis das gekennzeichnete Stylesheet geladen oder das Skript ausgeführt wurde. So erscheint die Seite nicht zunächst ohne Styles oder unvollständig.
  ([Firefox-Bug 2084340](https://bugzil.la/2084340)).

- **Wert `match-parent` für `quotes`** (Nightly): `layout.css.quotes.match-parent.enabled`

  Die CSS-Eigenschaft {{cssxref("quotes")}} unterstützt jetzt den Wert {{cssxref("quotes", "match-parent", "#match-parent")}}. Dadurch verwendet ein Element Anführungszeichen aus demselben Satz von Anführungszeichenpaaren wie sein Elternelement.
  ([Firefox-Bug 1752382](https://bugzil.la/1752382)).

- **Eigenschaft `text-autospace-size`**: `layout.css.text-autospace-size.enabled`

  Die Eigenschaft {{cssxref("text-autospace-size")}} wird jetzt unterstützt und ist in Nightly standardmäßig aktiviert. Sie legt fest, wie viel Abstand {{cssxref("text-autospace")}} zwischen chinesischen, japanischen oder koreanischen Zeichen (CJK) und Nicht-CJK-Zeichen einfügt.
  ([Firefox-Bug 2086765](https://bugzil.la/2086765)).

- **`prefers-color-scheme` berücksichtigt `<meta name="color-scheme">`**: `layout.css.prefers-color-scheme.meta-tag.enabled`

  Das Media-Feature {{cssxref("@media/prefers-color-scheme", "prefers-color-scheme")}} berücksichtigt jetzt das Farbschema, das durch ein Element [`<meta name="color-scheme">`](/de/docs/Web/HTML/Reference/Elements/meta/name/color-scheme) deklariert wird, sofern das Element genau ein Farbschema angibt. Dadurch lassen sich Bilder und Videos besser passend zum Farbschema auswählen. Außerdem wird die Implementierung von Theme-Umschaltern erleichtert. Die Einstellung ist in Nightly standardmäßig aktiviert. ([Firefox-Bug 2085572](https://bugzil.la/2085572)).
