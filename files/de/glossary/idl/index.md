---
title: IDL
slug: Glossary/IDL
l10n:
  sourceCommit: d7828f5d7479c27cc7eaeed6cce0c02a9142555c
---

{{GlossarySidebar}}

Eine **IDL** (_Interface Description Language_) ist eine generische Sprache, die verwendet wird, um Objekt-Schnittstellen unabhängig von einer bestimmten Programmiersprache zu spezifizieren.

## Inhaltsattribute versus IDL-Attribute

In HTML haben die meisten Attribute zwei Seiten: das **Inhaltsattribut** und das **IDL-Attribut**.

Das Inhaltsattribut ist das Attribut, das Sie im Inhalt (im HTML-Code) festlegen und das Sie über [`element.setAttribute()`](/de/docs/Web/API/Element/setAttribute) oder [`element.getAttribute()`](/de/docs/Web/API/Element/getAttribute) festlegen oder abrufen können. Das Inhaltsattribut ist immer ein String, auch wenn der erwartete Wert eine Ganzzahl sein sollte. Um beispielsweise das `maxlength` eines {{HTMLElement("input")}}-Elements mithilfe des Inhaltsattributs auf 42 festzulegen, müssen Sie `setAttribute("maxlength", "42")` für dieses Element aufrufen.

Das IDL-Attribut ist auch als JavaScript-Eigenschaft bekannt. Diese sind die Attribute, die Sie mit JavaScript-Eigenschaften wie `element.foo` lesen oder festlegen können. Das IDL-Attribut wird immer das zugrunde liegende Inhaltsattribut verwenden (aber eventuell transformieren), um einen Wert zurückzugeben, wenn Sie es abrufen, und etwas im Inhaltsattribut speichern, wenn Sie es festlegen. Mit anderen Worten spiegeln die IDL-Attribute im Wesentlichen die Inhaltsattribute wider.

Meistens geben IDL-Attribute ihre Werte so zurück, wie sie wirklich verwendet werden. Zum Beispiel ist der Standard-`type` für {{HTMLElement("input")}}-Elemente "text", also wenn Sie `input.type="foobar"` setzen, wird das `<input>`-Element vom Typ Text sein (in der Erscheinung und im Verhalten), aber der Wert des Inhaltsattributs "type" wird "foobar" sein. Das `type`-IDL-Attribut hingegen gibt den String "text" zurück.

IDL-Attribute sind nicht immer Strings; zum Beispiel ist `input.maxlength` eine Zahl (ein signed long). Bei der Verwendung von IDL-Attributen lesen oder setzen Sie Werte des gewünschten Typs, daher gibt `input.maxlength` immer eine Nummer zurück und wenn Sie `input.maxlength` setzen, erwartet es eine Nummer. Wenn Sie einen anderen Typ übergeben, wird er gemäß den standardmäßigen JavaScript-Regeln für die Typenkonvertierung automatisch in eine Zahl umgewandelt.

IDL-Attribute können [andere Typen widerspiegeln](https://html.spec.whatwg.org/multipage/urls-and-fetching.html#reflecting-content-attributes-in-idl-attributes) wie unsigned long, URLs, Booleans usw. Leider gibt es keine klaren Regeln und die Art und Weise, wie IDL-Attribute im Zusammenhang mit ihren entsprechenden Inhaltsattributen funktionieren, hängt vom Attribut ab. Meistens folgt es [den in der Spezifikation festgelegten Regeln](https://html.spec.whatwg.org/multipage/urls-and-fetching.html#reflecting-content-attributes-in-idl-attributes), aber manchmal tut es das nicht. Die HTML-Spezifikationen versuchen, dies so entwicklerfreundlich wie möglich zu gestalten, aber aus verschiedenen Gründen (meist aus historischen) verhalten sich einige Attribute eigenartig (`select.size` zum Beispiel), und Sie sollten die Spezifikationen lesen, um zu verstehen, wie genau sie funktionieren.

## Siehe auch

- [IDL](https://en.wikipedia.org/wiki/Interface_description_language) auf Wikipedia
- [HTML-Attributreferenz](/de/docs/Web/HTML/Attributes)
- [Interface Definition Language](https://people.eecs.berkeley.edu/~messer/netappc/Supplements/10-idl.pdf)
