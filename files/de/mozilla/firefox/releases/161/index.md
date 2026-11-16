---
title: Firefox 161 – Versionshinweise für Entwickler (Beta)
short-title: Firefox 161 (Beta)
slug: Mozilla/Firefox/Releases/161
l10n:
  sourceCommit: 095b9a051a348396a4e7f8dc29b797e90ba89589
---

Dieser Artikel informiert über die Änderungen in Firefox 161, die Entwickler betreffen.
Firefox 161 ist die aktuelle [Beta-Version von Firefox](https://www.firefox.com/en-US/channel/desktop/#beta) und erscheint am [24. November 2026](https://whattrainisitnow.com/release/?version=161).

> [!NOTE]
> Die Versionshinweise für diese Firefox-Version sind noch in Bearbeitung.

<!-- Authors: Please uncomment any headings you are writing notes for -->

## Änderungen für Webentwickler

<!-- ### Developer Tools -->

<!-- ### HTML -->

<!-- No notable changes. -->

<!-- #### Removals -->

<!-- ### MathML -->

<!-- #### Removals -->

### SVG

- Das Attribut [`referrerpolicy`](/de/docs/Web/SVG/Reference/Attribute/referrerpolicy) wird jetzt für die Elemente {{SVGElement("image")}}, {{SVGElement("script")}} und {{SVGElement("feImage")}} unterstützt, ebenso wie die entsprechenden Eigenschaften [`SVGImageElement.referrerPolicy`](/de/docs/Web/API/SVGImageElement/referrerPolicy), [`SVGScriptElement.referrerPolicy`](/de/docs/Web/API/SVGScriptElement/referrerPolicy) und [`SVGFEImageElement.referrerPolicy`](/de/docs/Web/API/SVGFEImageElement/referrerPolicy).
  Sie steuern, wie viele Referrer-Informationen im Header {{HTTPHeader("Referer")}} gesendet werden, wenn das Element die Ressource abruft, auf die sein Attribut `href` verweist. Dies funktioniert genauso wie das Attribut `referrerpolicy` bei den HTML-Elementen {{HTMLElement("img")}} und {{HTMLElement("script")}}.
  ([Firefox-Bug 2079321](https://bugzil.la/2079321)).

<!-- #### Removals -->

<!-- ### CSS -->

<!-- #### Removals -->

<!-- ### JavaScript -->

<!-- No notable changes. -->

<!-- #### Removals -->

<!-- ### HTTP -->

<!-- #### Removals -->

<!-- ### Security -->

<!-- #### Removals -->

### APIs

- Die Eigenschaften [`anticipatedConcurrentIncomingUnidirectionalStreams`](/de/docs/Web/API/WebTransport/anticipatedConcurrentIncomingUnidirectionalStreams) und [`anticipatedConcurrentIncomingBidirectionalStreams`](/de/docs/Web/API/WebTransport/anticipatedConcurrentIncomingBidirectionalStreams) des Interfaces `WebTransport` werden jetzt unterstützt. Dies gilt auch für die entsprechenden `options`-Eigenschaften, mit denen sie im Konstruktor [`WebTransport()`](/de/docs/Web/API/WebTransport/WebTransport) festgelegt werden können.
  Diese Eigenschaften geben die maximale Anzahl eingehender unidirektionaler beziehungsweise bidirektionaler Streams an, von denen die Anwendung erwartet, dass der Server sie gleichzeitig geöffnet hat.
  ([Firefox-Bug 2007825](https://bugzil.la/2007825)).
- Die [Clipboard API](/de/docs/Web/API/Clipboard_API) unterstützt jetzt [benutzerdefinierte Zwischenablageformate](/de/docs/Web/API/Clipboard_API#custom_clipboard_formats). Damit können Web-Apps mithilfe von [`Clipboard.write()`](/de/docs/Web/API/Clipboard/write) und [`Clipboard.read()`](/de/docs/Web/API/Clipboard/read) eigene Datenformate schreiben und lesen.
  Ein benutzerdefiniertes Format ist ein MIME-Typ mit dem Präfix `"web "`, beispielsweise `"web text/x-my-format"`.
  Benutzerdefinierte Formate können nur von einer Seite gelesen werden, die denselben Origin wie die Seite hat, die sie geschrieben hat.
  ([Firefox-Bug 2053725](https://bugzil.la/2053725), [Firefox-Bug 2086505](https://bugzil.la/2086505)).

- Die Eigenschaft [`NavigationTransition.to`](/de/docs/Web/API/NavigationTransition/to) der [Navigation API](/de/docs/Web/API/Navigation_API) wird jetzt unterstützt.
  Sie gibt ein [`NavigationDestination`](/de/docs/Web/API/NavigationDestination) für die laufende Navigation zurück. So kann Code außerhalb des Event-Handlers für [`navigate`](/de/docs/Web/API/Navigation/navigate_event) ermitteln, wohin die Navigation führt.
  Beispielsweise kann ein Handler für [`navigateerror`](/de/docs/Web/API/Navigation/navigateerror_event) damit angeben, welche Navigation fehlgeschlagen ist.
  ([Firefox-Bug 1991959](https://bugzil.la/1991959)).

<!-- #### DOM -->

#### Medien, WebRTC und Web Audio

- Die Methode [`RTCRtpSender.setParameters()`](/de/docs/Web/API/RTCRtpSender/setParameters) unterstützt jetzt den optionalen Parameter [`setParameterOptions`](/de/docs/Web/API/RTCRtpSender/setParameters#setparameteroptions).
  Damit können Sie den Encoder beim Ändern der Kodierungsparameter des Senders, etwa `active` oder `scaleResolutionDownBy`, im selben Aufruf anweisen, für eine Kodierung einen Keyframe zu erzeugen. Empfänger müssen dann nach der Änderung keinen Keyframe anfordern.
  ([Firefox-Bug 2057265](https://bugzil.la/2057265)).

<!-- #### Removals -->

<!-- ### WebAssembly -->

<!-- #### Removals -->

<!-- ### WebDriver conformance (WebDriver BiDi, Marionette) -->

<!-- #### General -->

<!-- #### WebDriver BiDi -->

<!-- #### Marionette -->

## Änderungen für Add-on-Entwickler

<!-- ### Removals -->

<!-- ### Other -->

## Experimentelle Webfunktionen

Diese Funktionen sind in Firefox 161 enthalten, aber standardmäßig deaktiviert.
Um sie auszuprobieren, suchen Sie auf der Seite `about:config` nach der entsprechenden Einstellung und setzen Sie sie auf `true`.
Weitere solche Funktionen finden Sie auf der Seite [Experimentelle Funktionen](/de/docs/Mozilla/Firefox/Experimental_features).
