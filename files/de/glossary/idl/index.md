---
title: IDL
slug: Glossary/IDL
l10n:
  sourceCommit: d7828f5d7479c27cc7eaeed6cce0c02a9142555c
---

{{GlossarySidebar}}

Ein **IDL** (_Interface Description Language_) ist eine generische Sprache, die zur Spezifikation von Objekt-Schnittstellen unabhängig von einer bestimmten Programmiersprache verwendet wird.

## Inhalts- versus IDL-Attribute

In HTML haben die meisten Attribute zwei Gesichter: das **Inhaltsattribut** und das **IDL-Attribut**.

Das Inhaltsattribut ist das Attribut, wie Sie es aus dem Inhalt (dem HTML-Code) setzen, und Sie können es über [`element.setAttribute()`](/de/docs/Web/API/Element/setAttribute) oder [`element.getAttribute()`](/de/docs/Web/API/Element/getAttribute) setzen oder abrufen. Das Inhaltsattribut ist immer ein String, auch wenn der erwartete Wert eine ganze Zahl sein sollte. Zum Beispiel, um das `maxlength` eines {{HTMLElement("input")}}-Elements über das Inhaltsattribut auf 42 zu setzen, müssen Sie `setAttribute("maxlength", "42")` auf diesem Element aufrufen.

Das IDL-Attribut ist auch als JavaScript-Eigenschaft bekannt. Dies sind die Attribute, die Sie über JavaScript-Eigenschaften wie `element.foo` lesen oder setzen können. Das IDL-Attribut wird immer (eventuell transformierend) das zugrunde liegende Inhaltsattribut verwenden, um einen Wert beim Abrufen zurückzugeben, und etwas im Inhaltsattribut speichern, wenn Sie es setzen. Mit anderen Worten, die IDL-Attribute spiegeln im Wesentlichen die Inhaltsattribute wider.

Meistens geben IDL-Attribute ihre Werte so zurück, wie sie tatsächlich verwendet werden. Zum Beispiel ist der Standard-`type` für {{HTMLElement("input")}}-Elemente "text". Wenn Sie `input.type="foobar"` setzen, wird das `<input>`-Element vom Typ Text sein (in Erscheinung und Verhalten), aber der Wert des "type" Inhaltsattributs wird "foobar" sein. Das `type` IDL-Attribut hingegen gibt den String "text" zurück.

IDL-Attribute sind nicht immer Strings; zum Beispiel ist `input.maxlength` eine Zahl (ein vorzeichenbehaftetes long). Wenn Sie IDL-Attribute verwenden, lesen oder setzen Sie Werte des gewünschten Typs, daher gibt `input.maxlength` immer eine Zahl zurück, und wenn Sie `input.maxlength` setzen, erwartet es eine Zahl. Wenn Sie einen anderen Typ übergeben, wird er gemäß den Standard-JavaScript-Regeln zur Typkonvertierung automatisch in eine Zahl umgewandelt.

IDL-Attribute können [andere Typen widerspiegeln](https://html.spec.whatwg.org/multipage/urls-and-fetching.html#reflecting-content-attributes-in-idl-attributes) wie unsigned long, URLs, Booleans etc. Leider gibt es keine klaren Regeln, und die Art und Weise, wie IDL-Attribute in Verbindung mit ihren entsprechenden Inhaltsattributen verhalten, hängt vom Attribut ab. Meistens folgt es [den in der Spezifikation festgelegten Regeln](https://html.spec.whatwg.org/multipage/urls-and-fetching.html#reflecting-content-attributes-in-idl-attributes), aber manchmal nicht. HTML-Spezifikationen versuchen, dies so entwicklerfreundlich wie möglich zu gestalten, aber aus verschiedenen Gründen (hauptsächlich historisch) verhalten sich einige Attribute ungewöhnlich (`select.size` zum Beispiel), und Sie sollten die Spezifikationen lesen, um zu verstehen, wie sie genau funktionieren.

## Siehe auch

- [IDL](https://en.wikipedia.org/wiki/Interface_description_language) auf Wikipedia
- [HTML-Attribut-Referenz](/de/docs/Web/HTML/Attributes)
- [Interface Definition Language](https://people.eecs.berkeley.edu/~messer/netappc/Supplements/10-idl.pdf)
