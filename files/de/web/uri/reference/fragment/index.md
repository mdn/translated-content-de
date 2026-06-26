---
title: URI-Fragment
short-title: Fragment
slug: Web/URI/Reference/Fragment
l10n:
  sourceCommit: 87ca9db1ebe56eb20c1f20b91fca43955d8f0e26
---

Das **Fragment** einer URI ist der letzte Teil der URI, beginnend mit dem `#` Zeichen. Es wird verwendet, um einen spezifischen Teil der Ressource zu identifizieren, wie beispielsweise einen Abschnitt eines Dokuments oder eine Position in einem Video. Das Fragment wird nicht an den Server gesendet, wenn die URI angefordert wird; es wird vom Client (z. B. dem Browser) nach dem Abrufen der Ressource verarbeitet.

## Syntax

```url
#fragment
```

- `fragment`
  - : Eine Folge von beliebigen Zeichen.
    Das genaue Format des Fragments wird von der Ressource selbst definiert.

## Beschreibung

Betrachten Sie die folgende URL:

```url
http://www.example.com:80/path/to/myfile.html?key1=value1&key2=value2#SomewhereInTheDocument
```

`#SomewhereInTheDocument` ist das _Fragment_ der URL, welches einen Anker zu einem anderen Teil der Ressource selbst darstellt. Ein Anker repräsentiert eine Art "Lesezeichen" innerhalb der Ressource und gibt dem Browser die Anweisung, den Inhalt an der entsprechenden Stelle anzuzeigen. In einem HTML-Dokument scrollt der Browser beispielsweise zu dem Punkt, an dem der Anker definiert ist. Es kann das [`id`](/de/docs/Web/HTML/Reference/Global_attributes/id) Attribut eines Elements sein, und der Browser scrollt zu diesem Element.
In einem Video- oder Audiodokument kann es ein [Medienfragment](/de/docs/Web/URI/Reference/Fragment/Media_fragments) in der Form von `#t=...` sein, wodurch das Video oder Audio ab dieser Zeit abgespielt wird.

Es gibt eine spezielle [Textfragment](/de/docs/Web/URI/Reference/Fragment/Text_fragments)-Funktion, die es Ihnen ermöglicht, auf einen bestimmten Teil einer Webseite zu verlinken, der durch seinen Textinhalt identifiziert wird.

## Beispiele

- `#syntax`
  - : Der Browser scrollt zu dem Element mit dem `id="syntax"` im Dokument (was für diese Seite die Überschrift [Syntax](#syntax) ist).
- `#:~:text=fragment`
  - : Der Browser wird den Text [`fragment`](#:~:text=fragment) im Dokument hervorheben; siehe [Textfragmente](/de/docs/Web/URI/Reference/Fragment/Text_fragments) für mehr Details.
- `#t=10,20`
  - : Das Video oder Audio beginnt ab der 10. Sekunde zu spielen; siehe [Medienfragmente](/de/docs/Web/URI/Reference/Fragment/Media_fragments) für mehr Details.

## Spezifikationen

{{Specifications}}

## Siehe auch

- [URIs](/de/docs/Web/URI)
- [Textfragmente](/de/docs/Web/URI/Reference/Fragment/Text_fragments)
- [Medienfragmente](/de/docs/Web/URI/Reference/Fragment/Media_fragments)
