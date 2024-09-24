---
title: IDL
slug: Glossary/IDL
l10n:
  sourceCommit: d7828f5d7479c27cc7eaeed6cce0c02a9142555c
---

{{GlossarySidebar}}

Ein **IDL** (_Interface Description Language_) ist eine generische Sprache, die verwendet wird, um Objekt-Schnittstellen unabhängig von einer bestimmten Programmiersprache zu spezifizieren.

## Inhalts- versus IDL-Attribute

In HTML haben die meisten Attribute zwei Erscheinungsformen: das **Inhaltsattribut** und das **IDL-Attribut**.

Das Inhaltsattribut ist das Attribut, das Sie im Inhalt (dem HTML-Code) setzen, und Sie können es über {{domxref("element.setAttribute()")}} oder {{domxref("element.getAttribute()")}} setzen oder abrufen. Das Inhaltsattribut ist immer ein String, auch wenn der erwartete Wert eine Ganzzahl sein sollte. Um beispielsweise das `maxlength` eines {{HTMLElement("input")}}-Elements auf 42 zu setzen, müssen Sie `setAttribute("maxlength", "42")` auf diesem Element aufrufen.

Das IDL-Attribut ist auch als JavaScript-Eigenschaft bekannt. Dies sind die Attribute, die Sie mit JavaScript-Eigenschaften wie `element.foo` lesen oder setzen können. Das IDL-Attribut wird immer (kann jedoch umformen) das zugrunde liegende Inhaltsattribut verwenden, um beim Abrufen einen Wert zurückzugeben, und wird etwas im Inhaltsattribut speichern, wenn Sie es setzen. Mit anderen Worten, die IDL-Attribute spiegeln im Wesentlichen die Inhaltsattribute wider.

Meistens geben IDL-Attribute ihre Werte so zurück, wie sie tatsächlich verwendet werden. Zum Beispiel ist der Standard-`type` für {{HTMLElement("input")}}-Elemente "text", daher wird ein `<input>`-Element des Typs "text" sein (in Aussehen und Verhalten), wenn Sie `input.type="foobar"` setzen, aber der Wert des "type"-Inhaltsattributs wird "foobar" sein. Das `type` IDL-Attribut wird jedoch den String "text" zurückgeben.

IDL-Attribute sind nicht immer Strings; zum Beispiel ist `input.maxlength` eine Zahl (ein vorzeichenloser Long). Bei der Verwendung von IDL-Attributen lesen oder setzen Sie Werte des gewünschten Typs, daher wird `input.maxlength` immer eine Zahl zurückgeben und wenn Sie `input.maxlength` setzen, erwartet es eine Zahl. Wenn Sie einen anderen Typ übergeben, wird dieser automatisch in eine Zahl umgewandelt, wie es die Standard-JavaScript-Regeln für die Typkonvertierung vorschreiben.

IDL-Attribute können [andere Typen widerspiegeln](https://html.spec.whatwg.org/multipage/urls-and-fetching.html#reflecting-content-attributes-in-idl-attributes) wie vorzeichenlose Longs, URLs, Booleans usw. Leider gibt es keine klaren Regeln und die Art und Weise, wie IDL-Attribute im Zusammenspiel mit ihren entsprechenden Inhaltsattributen funktionieren, hängt vom Attribut ab. Meistens folgt es [den in der Spezifikation festgelegten Regeln](https://html.spec.whatwg.org/multipage/urls-and-fetching.html#reflecting-content-attributes-in-idl-attributes), aber manchmal nicht. HTML-Spezifikationen versuchen, dies so entwicklerfreundlich wie möglich zu gestalten, aber aus verschiedenen Gründen (meist historisch) verhalten sich einige Attribute seltsam (`select.size` zum Beispiel) und Sie sollten die Spezifikationen lesen, um zu verstehen, wie sie genau funktionieren.

## Siehe auch

- [IDL](https://en.wikipedia.org/wiki/Interface_description_language) auf Wikipedia
- [HTML-Attributreferenz](/de/docs/Web/HTML/Attributes)
- [Interface Definition Language](https://people.eecs.berkeley.edu/~messer/netappc/Supplements/10-idl.pdf)
