---
title: Achsen
slug: Web/XPath/Axes
l10n:
  sourceCommit: b6f343538eac4a803943b4e99b0c0545b372645a
---

{{XsltSidebar}}

Es gibt dreizehn verschiedene Achsen in der [XPath](/de/docs/Web/XPath) Spezifikation. Eine Achse repräsentiert eine Beziehung zum Kontextknoten und wird verwendet, um Knoten relativ zu diesem Knoten im Baum zu finden.

Für weitere Informationen zur Verwendung von XPath-Ausdrücken, lesen Sie bitte den Abschnitt [For Further Reading](/de/docs/Web/XSLT/Transforming_XML_with_XSLT#for_further_reading) am Ende des Dokuments [XML mit XSLT transformieren](/de/docs/Web/XSLT/Transforming_XML_with_XSLT). Siehe auch den ['axes' section in der XPath-Spezifikation](https://www.w3.org/TR/xpath-30/#axes).

- `ancestor`
  - : Bezeichnet alle Vorfahren des Kontextknotens, beginnend mit dem Elterknoten bis hin zum Wurzelknoten.
- `ancestor-or-self`
  - : Bezeichnet den Kontextknoten und alle seine Vorfahren, einschließlich des Wurzelknotens.
- `attribute`
  - : Bezeichnet die Attribute des Kontextknotens. Nur Elemente haben Attribute. Diese Achse kann mit dem At-Zeichen (`@`) abgekürzt werden.
- `child`
  - : Bezeichnet die Kinder des Kontextknotens. Wenn ein XPath-Ausdruck keine Achse angibt, wird diese standardmäßig verstanden. Da nur der Wurzelknoten oder Elementknoten Kinder haben, wird jede andere Verwendung nichts auswählen.
- `descendant`
  - : Bezeichnet alle Kinder des Kontextknotens und alle deren Kinder und so weiter. Attribut- und Namensraumknoten sind **nicht** enthalten - der `parent` eines `attribute` Knotens ist ein Elementknoten, aber `attribute` Knoten sind keine Kinder ihrer Eltern.
- `descendant-or-self`
  - : Bezeichnet den Kontextknoten und alle seine Nachkommen. Attribut- und Namensraumknoten sind **nicht** enthalten - der `parent` eines `attribute` Knotens ist ein Elementknoten, aber `attribute` Knoten sind keine Kinder ihrer Eltern.
- `following`
  - : Bezeichnet alle Knoten, die nach dem Kontextknoten erscheinen, außer `descendant`, `attribute` und `namespace` Knoten.
- `following-sibling`
  - : Bezeichnet alle Knoten, die denselben Elter wie der Kontextknoten haben und im Quelldokument nach dem Kontextknoten erscheinen.
- `namespace` _(nicht unterstützt)_
  - : Bezeichnet alle Knoten, die im Bereich des Kontextknotens sind. In diesem Fall muss der Kontextknoten ein Elementknoten sein.
- `parent`
  - : Bezeichnet den einzelnen Knoten, der das Elternteil des Kontextknotens ist. Es kann als zwei Punkte (`..`) abgekürzt werden.
- `preceding`
  - : Bezeichnet alle Knoten, die dem Kontextknoten im Dokument vorausgehen, außer `ancestor`, `attribute` und `namespace` Knoten.
- `preceding-sibling`
  - : Bezeichnet alle Knoten, die denselben Elter wie der Kontextknoten haben und im Quelldokument vor dem Kontextknoten erscheinen.
- `self`
  - : Bezeichnet den Kontextknoten selbst. Es kann als ein einzelner Punkt (`.`) abgekürzt werden.