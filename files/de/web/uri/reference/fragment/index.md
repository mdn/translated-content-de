---
title: URI-Fragment
short-title: Fragment
slug: Web/URI/Reference/Fragment
l10n:
  sourceCommit: be9ba40fbef7f96beae73e5dd6d48a3ca875826f
---

Das **Fragment** eines URI ist der letzte Teil des URI, der mit dem `#`-Zeichen beginnt. Es wird verwendet, um einen bestimmten Teil der Ressource zu identifizieren, wie etwa einen Abschnitt eines Dokuments oder eine Position in einem Video. Das Fragment wird nicht an den Server gesendet, wenn der URI angefordert wird, sondern vom Client (wie dem Browser) verarbeitet, nachdem die Ressource abgerufen wurde.

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

`#SomewhereInTheDocument` ist das _Fragment_ der URL, das eine Ankerstelle zu einem anderen Teil der Ressource selbst darstellt. Ein Anker stellt eine Art "Lesezeichen" innerhalb der Ressource dar und gibt dem Browser die Anweisung, den Inhalt an der entsprechenden Stelle anzuzeigen. In einem HTML-Dokument beispielsweise wird der Browser zu dem Punkt scrollen, an dem der Anker definiert ist. Dies kann das [`id`](/de/docs/Web/HTML/Reference/Global_attributes/id)-Attribut eines Elements sein, und der Browser wird zu diesem Element scrollen.
In einem Video- oder Audiodokument kann es sich um ein [Medien-Fragment](https://www.w3.org/TR/media-frags/) in der Form von `#t=...` handeln, das das Video oder Audio ab diesem Zeitpunkt abspielen lässt.

Es gibt eine spezielle [Text-Fragment](/de/docs/Web/URI/Reference/Fragment/Text_fragments)-Funktion, die es erlaubt, zu einem bestimmten Teil einer Webseite zu verlinken, der durch seinen Textinhalt identifiziert wird.

## Beispiele

- `#syntax`
  - : Der Browser scrollt zu dem Element mit dem `id="syntax"` im Dokument (das für diese Seite die [Syntax](#syntax) Überschrift ist).
- `#:~:text=fragment`
  - : Der Browser wird den Text [`fragment`](#:~:text=fragment) im Dokument hervorheben.
- `#t=10,20`
  - : Das Video oder Audio wird ab der 10. Sekunde wiedergegeben.

## Spezifikationen

{{Specifications}}

## Siehe auch

- [URIs](/de/docs/Web/URI)
- [Text-Fragmenten](/de/docs/Web/URI/Reference/Fragment/Text_fragments)
