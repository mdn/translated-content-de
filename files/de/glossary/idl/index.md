---
title: IDL
slug: Glossary/IDL
l10n:
  sourceCommit: e9b6cd1b7fa8612257b72b2a85a96dd7d45c0200
---

{{GlossarySidebar}}

Eine **IDL** (_Interface Description Language_) ist eine generische Sprache zur Spezifikation von Objekt-Schnittstellen, unabhängig von einer bestimmten Programmiersprache.

## Inhalts- versus IDL-Attribute

In HTML haben die meisten Attribute zwei Seiten: das **Inhaltsattribut** und das **IDL-Attribut**.

Das Inhaltsattribut ist das Attribut, wie Sie es aus dem Inhalt (dem HTML-Code) festlegen, und Sie können es über [`element.setAttribute()`](/de/docs/Web/API/Element/setAttribute) oder [`element.getAttribute()`](/de/docs/Web/API/Element/getAttribute) setzen oder abrufen. Das Inhaltsattribut ist immer ein String, auch wenn der erwartete Wert eine ganze Zahl sein sollte. Um beispielsweise das `maxlength` eines {{HTMLElement("input")}}-Elements auf 42 zu setzen, müssen Sie `setAttribute("maxlength", "42")` auf diesem Element aufrufen.

Das IDL-Attribut ist auch als JavaScript-Eigenschaft bekannt. Dies sind die Attribute, die Sie über JavaScript-Eigenschaften wie `element.foo` lesen oder setzen können. Das IDL-Attribut verwendet (aber kann transformieren) immer das zugrunde liegende Inhaltsattribut, um beim Abrufen einen Wert zurückzugeben, und speichert etwas im Inhaltsattribut, wenn Sie es setzen. Mit anderen Worten, die IDL-Attribute spiegeln im Wesentlichen die Inhaltsattribute wider.

Die meiste Zeit geben IDL-Attribute ihre Werte so zurück, wie sie wirklich verwendet werden. Zum Beispiel ist der Standard `type` für {{HTMLElement("input")}}-Elemente "text", sodass, wenn Sie `input.type="foobar"` setzen, das `<input>`-Element vom Typ Text sein wird (im Aussehen und Verhalten), aber der Wert des "type"-Inhaltsattributs "foobar" sein wird. Allerdings wird das `type` IDL-Attribut den String "text" zurückgeben.

IDL-Attribute sind nicht immer Strings; zum Beispiel ist `input.maxlength` eine Zahl (ein unterschriebenes langes Format). Wenn Sie IDL-Attribute verwenden, lesen oder setzen Sie Werte des gewünschten Typs, sodass `input.maxlength` immer eine Zahl zurückgibt, und wenn Sie `input.maxlength` setzen, möchte es eine Zahl. Wenn Sie einen anderen Typ übergeben, wird er gemäß den Standard-JavaScript-Regeln zur Typkonvertierung automatisch in eine Zahl umgewandelt.

IDL-Attribute können [andere Typen widerspiegeln](https://html.spec.whatwg.org/multipage/urls-and-fetching.html#reflecting-content-attributes-in-idl-attributes) wie unsigned long, URLs, Booleans usw. Leider gibt es keine klaren Regeln, und die Art und Weise, wie IDL-Attribute im Zusammenspiel mit ihren entsprechenden Inhaltsattributen funktionieren, hängt vom Attribut ab. Meistens folgen sie [den im Spezifikation festgelegten Regeln](https://html.spec.whatwg.org/multipage/urls-and-fetching.html#reflecting-content-attributes-in-idl-attributes), aber manchmal nicht. HTML-Spezifikationen versuchen, dies so entwicklerfreundlich wie möglich zu gestalten, aber aus verschiedenen Gründen (meist historisch) verhalten sich einige Attribute eigenartig (`select.size`, zum Beispiel), und Sie sollten die Spezifikationen lesen, um zu verstehen, wie sie genau funktionieren.

## Siehe auch

- [IDL](https://en.wikipedia.org/wiki/Interface_description_language) auf Wikipedia
- [HTML-Attributreferenz](/de/docs/Web/HTML/Reference/Attributes)
- [Interface Definition Language](https://people.eecs.berkeley.edu/~messer/netappc/Supplements/10-idl.pdf)
