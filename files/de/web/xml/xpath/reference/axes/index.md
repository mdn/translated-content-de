---
title: Achsen
slug: Web/XML/XPath/Reference/Axes
l10n:
  sourceCommit: 636b90011532e3fd2cf9333aaf1754fdc8de7938
---

Es gibt dreizehn verschiedene Achsen in der [XPath](/de/docs/Web/XML/XPath) Spezifikation. Eine Achse repräsentiert eine Beziehung zum Kontextknoten und wird verwendet, um Knoten relativ zu diesem Knoten im Baum zu lokalisieren.

Für weitere Informationen zur Verwendung von XPath-Ausdrücken siehe bitte den [Transformieren von XML mit XSLT](/de/docs/Web/XML/XSLT/Guides/Transforming_XML_with_XSLT) Leitfaden. Siehe auch den ['axes' Abschnitt in der xpath Spezifikation](https://www.w3.org/TR/xpath-3/#axes).

- `ancestor`
  - : Gibt alle Vorfahren des Kontextknotens an, beginnend mit dem Elternknoten und fortfahrend bis zum Wurzelknoten.
- `ancestor-or-self`
  - : Gibt den Kontextknoten und alle seine Vorfahren an, einschließlich des Wurzelknotens.
- `attribute`
  - : Gibt die Attribute des Kontextknotens an. Nur Elemente haben Attribute. Diese Achse kann mit dem At-Zeichen (`@`) abgekürzt werden.
- `child`
  - : Gibt die Kinder des Kontextknotens an. Wenn ein XPath-Ausdruck keine Achse spezifiziert, wird dies standardmäßig angenommen. Da nur der Wurzelknoten oder Elementknoten Kinder haben, wird jede andere Verwendung nichts auswählen.
- `descendant`
  - : Gibt alle Kinder des Kontextknotens an, und alle deren Kinder, und so weiter. Attribut- und Namensraumknoten sind **nicht** eingeschlossen - das `parent` eines `attribute`-Knotens ist ein Elementknoten, aber `attribute`-Knoten sind nicht die Kinder ihrer Eltern.
- `descendant-or-self`
  - : Gibt den Kontextknoten und alle seine Nachkommen an. Attribut- und Namensraumknoten sind **nicht** eingeschlossen - das `parent` eines `attribute`-Knotens ist ein Elementknoten, aber `attribute`-Knoten sind nicht die Kinder ihrer Eltern.
- `following`
  - : Gibt alle Knoten an, die nach dem Kontextknoten erscheinen, mit Ausnahme von `descendant`, `attribute` und `namespace` Knoten.
- `following-sibling`
  - : Gibt alle Knoten an, die denselben Elternknoten wie der Kontextknoten haben und im Quelldokument nach dem Kontextknoten erscheinen.
- `namespace` _(nicht unterstützt)_
  - : Gibt alle Knoten an, die im Geltungsbereich für den Kontextknoten sind. In diesem Fall muss der Kontextknoten ein Elementknoten sein.
- `parent`
  - : Gibt den einzelnen Knoten an, der der Elternknoten des Kontextknotens ist. Es kann als zwei Punkte (`..`) abgekürzt werden.
- `preceding`
  - : Gibt alle Knoten an, die im Dokument dem Kontextknoten vorausgehen, mit Ausnahme von `ancestor`, `attribute` und `namespace` Knoten.
- `preceding-sibling`
  - : Gibt alle Knoten an, die denselben Elternknoten wie der Kontextknoten haben und im Quelldokument vor dem Kontextknoten erscheinen.
- `self`
  - : Gibt den Kontextknoten selbst an. Es kann als ein Punkt (`.`) abgekürzt werden.
