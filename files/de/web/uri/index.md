---
title: URIs
slug: Web/URI
l10n:
  sourceCommit: eaec5c4226ac64696a95314a7bce995165a4d124
---

**Uniform Resource Identifiers (URI)** werden verwendet, um "Ressourcen" im Web zu identifizieren. URIs werden häufig als Ziele von [HTTP](/de/docs/Web/HTTP)-Anfragen verwendet, wobei der URI in diesem Fall einen Ort für eine Ressource repräsentiert, wie ein Dokument, ein Foto oder binäre Daten. Der häufigste Typ eines URI ist ein Uniform Resource Locator ({{Glossary("URL", "URL")}}), der als _Webadresse_ bekannt ist.

URIs können verwendet werden, um Verhaltensweisen auszulösen, die über das Abrufen einer Ressource hinausgehen, wie z. B. das Öffnen eines E-Mail-Clients, das Senden von Textnachrichten oder das Ausführen von JavaScript, wenn sie an anderen Stellen wie dem [`href`](/de/docs/Web/HTML/Reference/Elements/a#href) eines HTML-`<a>`-Links verwendet werden.

## Referenz

Die [URI-Referenz](/de/docs/Web/URI/Reference) liefert Details über die Komponenten, die einen URI ausmachen.

- [Schemes](/de/docs/Web/URI/Reference/Schemes)
  - : Der erste Teil des URI, vor dem `:`-Zeichen, das das Protokoll angibt, das der Browser verwenden muss, um die Ressource abzurufen.
- [Authority](/de/docs/Web/URI/Reference/Authority)
  - : Der Abschnitt, der nach dem Schema und vor dem Pfad kommt. Er kann bis zu drei Teile haben: `user`-Informationen, `host` und `port`.
- [Path](/de/docs/Web/URI/Reference/Path)
  - : Der Abschnitt nach der Authority. Enthält Daten, normalerweise in hierarchischer Form organisiert, um eine Ressource im Rahmen des Schemas und der Authority des URI zu identifizieren.
- [Fragment](/de/docs/Web/URI/Reference/Fragment)
  - : Ein optionaler Teil am Ende eines URI, der mit einem `#` beginnt. Er wird verwendet, um einen bestimmten Teil der Ressource zu identifizieren, wie z. B. einen Abschnitt eines Dokuments oder eine Position in einem Video.

## Leitfäden

Die [URI-Leitfäden](/de/docs/Web/URI/Guides) helfen Ihnen, mit URIs im Web zu arbeiten.

- [Entscheidung zwischen www und nicht-www URLs](/de/docs/Web/URI/Guides/Choosing_between_www_and_non-www_URLs)
  - : Leitfaden, wann Websites ein `www.`-Präfix in URLs verwenden sollten (`www.example.com` vs `example.com`).

## Spezifikationen

{{Specifications}}

## Siehe auch

- [Was ist eine URL?](/de/docs/Learn_web_development/Howto/Web_mechanics/What_is_a_URL)
