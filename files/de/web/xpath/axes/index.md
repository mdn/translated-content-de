---
title: Achsen
slug: Web/XPath/Axes
l10n:
  sourceCommit: b6f343538eac4a803943b4e99b0c0545b372645a
---

{{XsltSidebar}}

Es gibt dreizehn verschiedene Achsen in der [XPath](/de/docs/Web/XPath)-Spezifikation. Eine Achse repräsentiert eine Beziehung zum Kontextknoten und wird verwendet, um Knoten relativ zu diesem Knoten im Baum zu lokalisieren.

Für weitere Informationen zur Verwendung von XPath-Ausdrücken lesen Sie bitte den Abschnitt [Weiterführende Literatur](/de/docs/Web/XSLT/Transforming_XML_with_XSLT#for_further_reading) am Ende des Dokuments [Transforming XML with XSLT](/de/docs/Web/XSLT/Transforming_XML_with_XSLT). Siehe auch den ['axes'-Abschnitt in der xpath-Spezifikation](https://www.w3.org/TR/xpath-30/#axes).

- `ancestor`
  - : Gibt alle Vorfahren des Kontextknotens an, beginnend mit dem Elternknoten und bis zum Wurzelknoten.
- `ancestor-or-self`
  - : Gibt den Kontextknoten und alle seine Vorfahren, einschließlich des Wurzelknotens, an.
- `attribute`
  - : Gibt die Attribute des Kontextknotens an. Nur Elemente haben Attribute. Diese Achse kann mit dem At-Zeichen (`@`) abgekürzt werden.
- `child`
  - : Gibt die Kinder des Kontextknotens an. Wenn ein XPath-Ausdruck keine Achse angibt, wird diese standardmäßig angenommen. Da nur der Wurzelknoten oder Elementknoten Kinder haben, wird jede andere Verwendung nichts auswählen.
- `descendant`
  - : Gibt alle Kinder des Kontextknotens und alle deren Kinder usw. an. Attribut- und Namensraumknoten sind **nicht** enthalten - der `parent` eines `attribute`-Knotens ist ein Elementknoten, aber `attribute`-Knoten sind nicht die Kinder ihrer Eltern.
- `descendant-or-self`
  - : Gibt den Kontextknoten und alle seine Nachkommen an. Attribut- und Namensraumknoten sind **nicht** enthalten - der `parent` eines `attribute`-Knotens ist ein Elementknoten, aber `attribute`-Knoten sind nicht die Kinder ihrer Eltern.
- `following`
  - : Gibt alle Knoten an, die nach dem Kontextknoten erscheinen, mit Ausnahme von `descendant`, `attribute` und `namespace`-Knoten.
- `following-sibling`
  - : Gibt alle Knoten an, die denselben Elternknoten wie der Kontextknoten haben und nach dem Kontextknoten im Quelldokument erscheinen.
- `namespace` _(nicht unterstützt)_
  - : Gibt alle Knoten an, die im Gültigkeitsbereich des Kontextknotens liegen. In diesem Fall muss der Kontextknoten ein Elementknoten sein.
- `parent`
  - : Gibt den einzelnen Knoten an, der der Elternknoten des Kontextknotens ist. Er kann als zwei Punkte (`..`) abgekürzt werden.
- `preceding`
  - : Gibt alle Knoten an, die dem Kontextknoten im Dokument vorausgehen, mit Ausnahme von `ancestor`, `attribute` und `namespace`-Knoten.
- `preceding-sibling`
  - : Gibt alle Knoten an, die denselben Elternknoten wie der Kontextknoten haben und vor dem Kontextknoten im Quelldokument erscheinen.
- `self`
  - : Gibt den Kontextknoten selbst an. Er kann als ein einzelner Punkt (`.`) abgekürzt werden.
