---
title: URI-Fragment
slug: Web/URI/Fragment
l10n:
  sourceCommit: b25d8774aa7bcc6a053e26cf804ad454f51e134b
---

{{QuickLinksWithSubpages("/de/docs/Web/URI")}}

Das **Fragment** einer URI ist der letzte Teil der URI, der mit dem `#`-Zeichen beginnt. Es wird verwendet, um einen spezifischen Teil der Ressource zu identifizieren, wie z.B. einen Abschnitt eines Dokuments oder eine Position in einem Video. Das Fragment wird nicht an den Server gesendet, wenn die URI angefordert wird, sondern es wird vom Client (wie dem Browser) verarbeitet, nachdem die Ressource abgerufen wurde.

## Syntax

```url
#fragment
```

- fragment

  - : Eine Sequenz beliebiger Zeichen. Das genaue Format des Fragments wird durch die Ressource selbst definiert. Einige gängige Beispiele:

    - In einem HTML-Dokument kann dies das [`id`](/de/docs/Web/HTML/Global_attributes/id)-Attribut eines Elements sein, und der Browser scrollt zu diesem Element.
    - Es kann ein [Textfragment](/de/docs/Web/URI/Fragment/Text_fragments) in der Form von `#:~:text=...` sein, was den Browser den angegebenen Text hervorheben lässt.
    - Es kann ein [Medienfragment](https://www.w3.org/TR/media-frags/) in der Form von `#t=...` sein, was das Video oder Audio ab dieser Zeit abspielen lässt.

## Beispiele

- `#syntax`
  - : Der Browser scrollt zu dem Element mit `id="syntax"` im Dokument (was für diese Seite die [Syntax](#syntax)-Überschrift ist).
- `#:~:text=fragment`
  - : Der Browser wird den Text [`fragment`](#:~:text=fragment) im Dokument hervorheben.
- `#t=10,20`
  - : Das Video oder Audio beginnt ab der 10. Sekunde abzuspielen.

## Spezifikationen

{{Specifications}}

## Siehe auch

- [URIs](/de/docs/Web/URI)
- [Textfragmente](/de/docs/Web/URI/Fragment/Text_fragments)
