---
title: URI-Fragment
short-title: Fragment
slug: Web/URI/Reference/Fragment
l10n:
  sourceCommit: 224631999df9097fb7f5fa861a4ec534aa598eb2
---

Das **Fragment** eines URI ist der letzte Teil des URI, beginnend mit dem `#`-Zeichen. Es wird verwendet, um einen spezifischen Teil der Ressource zu identifizieren, wie etwa einen Abschnitt eines Dokuments oder eine Position in einem Video. Das Fragment wird bei der Anforderung des URI nicht an den Server gesendet; es wird vom Client (z. B. dem Browser) verarbeitet, nachdem die Ressource abgerufen wurde.

## Syntax

```url
#fragment
```

- `fragment`
  - : Eine Sequenz beliebiger Zeichen.
    Das genaue Format des Fragments wird durch die Ressource selbst definiert.

## Beschreibung

Betrachten Sie die folgende URL:

```url
http://www.example.com:80/path/to/myfile.html?key1=value1&key2=value2#SomewhereInTheDocument
```

`#SomewhereInTheDocument` ist das _Fragment_ der URL, das ein Anker zu einem anderen Teil der Ressource selbst ist. Ein Anker stellt eine Art "Lesezeichen" innerhalb der Ressource dar und gibt dem Browser die Anweisung, den Inhalt an dieser Stelle anzuzeigen. In einem HTML-Dokument scrollt der Browser beispielsweise zu dem Punkt, an dem der Anker definiert ist. Es kann das [`id`](/de/docs/Web/HTML/Reference/Global_attributes/id)-Attribut eines Elements sein, und der Browser wird zu diesem Element scrollen. In einem Video- oder Audio-Dokument kann es sich um ein [Media Fragment](/de/docs/Web/URI/Reference/Fragment/Media_fragments) in der Form von `#t=...` handeln, wodurch das Video oder Audio von dieser Zeit an abgespielt wird.

Es gibt eine spezielle [Text-Fragment](/de/docs/Web/URI/Reference/Fragment/Text_fragments)-Funktion, die es ermöglicht, zu einem spezifischen Teil einer Webseite zu verlinken, der durch seinen Textinhalt identifiziert ist.

## Beispiele

- `#syntax`
  - : Der Browser wird zu dem Element mit der `id="syntax"` im Dokument scrollen (was für diese Seite die [Syntax](#syntax)-Überschrift ist).
- `#:~:text=fragment`
  - : Der Browser wird den Text [`fragment`](#:~:text=fragment) im Dokument hervorheben; siehe [Textfragmente](/de/docs/Web/URI/Reference/Fragment/Text_fragments) für weitere Details.
- `#t=10,20`
  - : Das Video oder Audio beginnt bei der 10. Sekunde zu spielen; siehe [Media Fragmente](/de/docs/Web/URI/Reference/Fragment/Media_fragments) für weitere Details.

## Spezifikationen

{{Specifications}}

## Siehe auch

- [URIs](/de/docs/Web/URI)
- [Textfragmente](/de/docs/Web/URI/Reference/Fragment/Text_fragments)
- [Media Fragmente](/de/docs/Web/URI/Reference/Fragment/Media_fragments)
