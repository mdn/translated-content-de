---
title: Achsen
slug: Web/XML/XPath/Reference/Axes
l10n:
  sourceCommit: de7efb5a4741ef1ae33a6e160066801c745633e4
---

In der [XPath](/de/docs/Web/XML/XPath)-Spezifikation gibt es dreizehn verschiedene Achsen. Eine Achse stellt eine Beziehung zum Kontextknoten dar und wird verwendet, um Knoten relativ zu diesem Knoten im Baum zu lokalisieren.

Für weitere Informationen zur Verwendung von XPath-Ausdrücken siehe den [Leitfaden zu Transformationen von XML mit XSLT](/de/docs/Web/XML/XSLT/Guides/Transforming_XML_with_XSLT). Siehe auch den ['axes'-Abschnitt in der XPath-Spezifikation](https://www.w3.org/TR/xpath-30/#axes).

- `ancestor`
  - : Gibt alle Vorfahren des Kontextknotens an, beginnend mit dem Elterknoten und bis zum Wurzelknoten.
- `ancestor-or-self`
  - : Gibt den Kontextknoten und alle seine Vorfahren an, einschließlich des Wurzelknotens.
- `attribute`
  - : Gibt die Attribute des Kontextknotens an. Nur Elemente haben Attribute. Diese Achse kann mit dem At-Zeichen (`@`) abgekürzt werden.
- `child`
  - : Gibt die Kinder des Kontextknotens an. Wenn in einem XPath-Ausdruck keine Achse angegeben wird, wird diese standardmäßig verstanden. Da nur der Wurzelknoten oder Elementknoten Kinder haben, wird jede andere Verwendung nichts auswählen.
- `descendant`
  - : Gibt alle Kinder des Kontextknotens an, sowie alle deren Kinder, und so weiter. Attribut- und Namensraumknoten sind **nicht** enthalten - der `parent` eines `attribute`-Knotens ist ein Elementknoten, aber `attribute`-Knoten sind nicht die Kinder ihrer Eltern.
- `descendant-or-self`
  - : Gibt den Kontextknoten und alle seine Nachkommen an. Attribut- und Namensraumknoten sind **nicht** enthalten - der `parent` eines `attribute`-Knotens ist ein Elementknoten, aber `attribute`-Knoten sind nicht die Kinder ihrer Eltern.
- `following`
  - : Gibt alle Knoten an, die nach dem Kontextknoten erscheinen, ausgenommen alle `descendant`-, `attribute`- und `namespace`-Knoten.
- `following-sibling`
  - : Gibt alle Knoten an, die denselben Elterknoten wie der Kontextknoten haben und nach dem Kontextknoten im Quelldokument erscheinen.
- `namespace` _(nicht unterstützt)_
  - : Gibt alle Knoten an, die im Geltungsbereich für den Kontextknoten sind. In diesem Fall muss der Kontextknoten ein Elementknoten sein.
- `parent`
  - : Gibt den einzelnen Knoten an, der der Elterknoten des Kontextknotens ist. Er kann als zwei Punkte (`..`) abgekürzt werden.
- `preceding`
  - : Gibt alle Knoten an, die im Dokument vor dem Kontextknoten stehen, ausgenommen alle `ancestor`-, `attribute`- und `namespace`-Knoten.
- `preceding-sibling`
  - : Gibt alle Knoten an, die denselben Elterknoten wie der Kontextknoten haben und im Quelldokument vor dem Kontextknoten erscheinen.
- `self`
  - : Gibt den Kontextknoten selbst an. Er kann als ein einzelner Punkt (`.`) abgekürzt werden.
