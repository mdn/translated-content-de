---
title: URIs
slug: Web/URI
l10n:
  sourceCommit: be9ba40fbef7f96beae73e5dd6d48a3ca875826f
---

**Uniform Resource Identifiers (URI)** werden verwendet, um "Ressourcen" im Web zu identifizieren. URIs werden häufig als Ziele von [HTTP](/de/docs/Web/HTTP)-Anfragen verwendet, wobei der URI dann einen Speicherort für eine Ressource darstellt, wie z. B. ein Dokument, ein Foto oder binäre Daten. Der häufigste Typ von URI ist ein Uniform Resource Locator ({{Glossary("URL", "URL")}}), der auch als _Webadresse_ bekannt ist.

URIs können verwendet werden, um andere Verhaltensweisen als das Abrufen einer Ressource auszulösen, wie z. B. das Öffnen eines E-Mail-Clients, das Senden von Textnachrichten oder das Ausführen von JavaScript, wenn sie an anderen Stellen wie im [`href`](/de/docs/Web/HTML/Reference/Elements/a#href) eines HTML-`<a>`-Links verwendet werden.

## Referenz

Die [URI-Referenz](/de/docs/Web/URI/Reference) bietet Details zu den Komponenten, die einen URI ausmachen.

- [Schemas](/de/docs/Web/URI/Reference/Schemes)
  - : Der erste Teil des URI, vor dem `:`-Zeichen, der das Protokoll angibt, das der Browser verwenden muss, um die Ressource zu holen.
- [Authority](/de/docs/Web/URI/Reference/Authority)
  - : Der Abschnitt, der nach dem Schema und vor dem Pfad kommt.
    Er kann bis zu drei Teile haben: `user`-Informationen, `host` und `port`.
- [Pfad](/de/docs/Web/URI/Reference/Path)
  - : Der Abschnitt nach der Authority.
    Enthält Daten, die normalerweise in hierarchischer Form organisiert sind, um eine Ressource im Umfang des Schemas und der Authority des URI zu identifizieren.
- [Fragment](/de/docs/Web/URI/Reference/Fragment)
  - : Ein optionaler Teil am Ende eines URI, der mit einem `#`-Zeichen beginnt.
    Es wird verwendet, um einen bestimmten Teil der Ressource zu identifizieren, wie z. B. einen Abschnitt eines Dokuments oder eine Position in einem Video.

## Leitfäden

Die [URI-Leitfäden](/de/docs/Web/URI/Guides) helfen Ihnen, mit URIs im Web zu arbeiten.

- [Auswahl zwischen www und nicht-www URLs](Choosing_between_www_and_non-www_URLs)
  - : Anleitung, wann Websites ein `www.`-Präfix in URLs verwenden sollten (`www.example.com` vs `example.com`).

## Spezifikationen

{{Specifications}}

## Siehe auch

- [Was ist eine URL?](/de/docs/Learn_web_development/Howto/Web_mechanics/What_is_a_URL)
