---
title: URI-Fragment
slug: Web/URI/Fragment
l10n:
  sourceCommit: b25d8774aa7bcc6a053e26cf804ad454f51e134b
---

{{QuickLinksWithSubpages("/de/docs/Web/URI")}}

Das **Fragment** einer URI ist der letzte Teil der URI, beginnend mit dem Zeichen `#`. Es wird verwendet, um einen spezifischen Teil der Ressource zu identifizieren, wie z.B. einen Abschnitt eines Dokuments oder eine Position in einem Video. Das Fragment wird nicht an den Server gesendet, wenn die URI angefordert wird, sondern vom Client (wie dem Browser) verarbeitet, nachdem die Ressource abgerufen wurde.

## Syntax

```url
#fragment
```

- fragment

  - : Eine Folge beliebiger Zeichen. Das genaue Format des Fragments wird von der Ressource selbst definiert. Einige häufige Beispiele:

    - In einem HTML-Dokument kann es das [`id`](/de/docs/Web/HTML/Global_attributes/id)-Attribut eines Elements sein, und der Browser wird zu diesem Element scrollen.
    - Es kann sich um ein [Textfragment](/de/docs/Web/URI/Fragment/Text_fragments) in der Form von `#:~:text=...` handeln, das den Browser dazu bringt, den angegebenen Text hervorzuheben.
    - Es kann sich um ein [Media-Fragment](https://www.w3.org/TR/media-frags/) in der Form von `#t=...` handeln, das dazu führt, dass das Video oder Audio ab dieser Zeit abgespielt wird.

## Beispiele

- `#syntax`
  - : Der Browser wird zu dem Element mit dem `id="syntax"` im Dokument scrollen (was für diese Seite die [Syntax](#syntax)-Überschrift ist).
- `#:~:text=fragment`
  - : Der Browser wird den Text [`fragment`](#:~:text=fragment) im Dokument hervorheben.
- `#t=10,20`
  - : Das Video oder Audio wird ab der 10. Sekunde abgespielt.

## Spezifikationen

{{Specifications}}

## Siehe auch

- [URIs](/de/docs/Web/URI)
- [Textfragmente](/de/docs/Web/URI/Fragment/Text_fragments)
