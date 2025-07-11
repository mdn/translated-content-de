---
title: IDL
slug: Glossary/IDL
l10n:
  sourceCommit: 2547f622337d6cbf8c3794776b17ed377d6aad57
---

Eine **IDL** (_Interface Description Language_) ist eine generische Sprache, die verwendet wird, um Objektschnittstellen unabhängig von einer bestimmten Programmiersprache zu spezifizieren.

## Inhalts- versus IDL-Attribute

In HTML haben die meisten Attribute zwei Aspekte: das **Inhaltsattribut** und das **IDL-Attribut**.

Das Inhaltsattribut ist das Attribut, wie Sie es im Inhalt festlegen (im HTML-Code), und Sie können es mit [`element.setAttribute()`](/de/docs/Web/API/Element/setAttribute) oder [`element.getAttribute()`](/de/docs/Web/API/Element/getAttribute) festlegen oder abrufen. Das Inhaltsattribut ist immer ein String, selbst wenn der erwartete Wert eine ganze Zahl sein sollte. Um zum Beispiel das `maxlength` eines {{HTMLElement("input")}}-Elements auf 42 mit dem Inhaltsattribut festzulegen, müssen Sie `setAttribute("maxlength", "42")` für dieses Element aufrufen.

Das IDL-Attribut ist auch als JavaScript-Eigenschaft bekannt. Dies sind die Attribute, die Sie mit JavaScript-Eigenschaften wie `element.foo` lesen oder setzen können. Das IDL-Attribut verwendet immer (kann aber transformieren) das zugrundeliegende Inhaltsattribut, um einen Wert zurückzugeben, wenn Sie es abrufen, und speichert etwas im Inhaltsattribut, wenn Sie es festlegen. Mit anderen Worten, die IDL-Attribute spiegeln im Wesentlichen die Inhaltsattribute wider.

Meistens geben IDL-Attribute ihre Werte so zurück, wie sie wirklich verwendet werden. Zum Beispiel ist der Standard-`type` für {{HTMLElement("input")}}-Elemente "text", also wenn Sie `input.type="foobar"` setzen, wird das `<input>`-Element vom Typ Text sein (in Aussehen und Verhalten), aber der Wert des "type"-Inhaltsattributs wird "foobar" sein. Das `type` IDL-Attribut wird jedoch die Zeichenkette "text" zurückgeben.

IDL-Attribute sind nicht immer Zeichenketten; zum Beispiel ist `input.maxlength` eine Zahl (ein vorzeichenloser langer Wert). Wenn Sie IDL-Attribute verwenden, lesen oder setzen Sie Werte des gewünschten Typs, also wird `input.maxlength` immer eine Zahl zurückgeben, und wenn Sie `input.maxlength` setzen, erwartet es eine Zahl. Wenn Sie einen anderen Typ übergeben, wird er automatisch in eine Zahl umgewandelt, wie es die Standard-JavaScript-Regeln für Typkonvertierungen vorsehen.

IDL-Attribute können [andere Typen widerspiegeln](https://html.spec.whatwg.org/multipage/urls-and-fetching.html#reflecting-content-attributes-in-idl-attributes), wie vorzeichenlose lange Werte, URLs, boolesche Werte usw. Leider gibt es keine klaren Regeln, und wie sich IDL-Attribute in Verbindung mit ihren entsprechenden Inhaltsattributen verhalten, hängt vom Attribut ab. Meistens folgt es [den in der Spezifikation festgelegten Regeln](https://html.spec.whatwg.org/multipage/urls-and-fetching.html#reflecting-content-attributes-in-idl-attributes), aber manchmal nicht. Die HTML-Spezifikationen versuchen, dies so entwicklerfreundlich wie möglich zu gestalten, aber aus verschiedenen Gründen (meist historisch) verhalten sich einige Attribute merkwürdig (`select.size` zum Beispiel) und Sie sollten die Spezifikationen lesen, um zu verstehen, wie sie genau funktionieren.

## Siehe auch

- [IDL](https://en.wikipedia.org/wiki/Interface_description_language) auf Wikipedia
- [HTML-Attributreferenz](/de/docs/Web/HTML/Reference/Attributes)
- [Interface Definition Language](https://people.eecs.berkeley.edu/~messer/netappc/Supplements/10-idl.pdf)
