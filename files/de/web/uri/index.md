---
title: URIs
slug: Web/URI
l10n:
  sourceCommit: 9aa03132f4c0aebc474995a234f4e52c64fcc6b4
---

**Uniform Resource Identifiers (URI)** werden verwendet, um "Ressourcen" im Web zu identifizieren. URIs werden häufig als Ziele von [HTTP](/de/docs/Web/HTTP)-Anfragen verwendet, wobei der URI in diesem Fall eine Position für eine Ressource darstellt, wie etwa ein Dokument, ein Foto oder Binärdaten. Der häufigste Typ eines URI ist ein Uniform Resource Locator ({{Glossary("URL", "URL")}}), der als _Webadresse_ bekannt ist.

URIs können verwendet werden, um andere Verhaltensweisen als das Abrufen einer Ressource auszulösen, einschließlich des Öffnens eines E-Mail-Clients, des Sendens von Textnachrichten oder der Ausführung von JavaScript, wenn sie an anderen Stellen wie im [`href`](/de/docs/Web/HTML/Reference/Elements/a#href) eines HTML-`<a>`-Links verwendet werden.

## Referenz

Die [URI-Referenz](/de/docs/Web/URI/Reference) bietet Details über die Komponenten, aus denen ein URI besteht.

- [Schemata](/de/docs/Web/URI/Reference/Schemes)
  - : Der erste Teil des URI, vor dem `:`-Zeichen, das das Protokoll angibt, das der Browser verwenden muss, um die Ressource abzurufen.
- [Autorität](/de/docs/Web/URI/Reference/Authority)
  - : Der Abschnitt, der nach dem Schema und vor dem Pfad kommt.
    Er kann bis zu drei Teile haben: `user`-Informationen, `host` und `port`.
- [Pfad](/de/docs/Web/URI/Reference/Path)
  - : Der Abschnitt nach der Autorität.
    Enthält Daten, normalerweise in hierarchischer Form organisiert, zur Identifizierung einer Ressource innerhalb des Geltungsbereichs des Schemas und der Autorität des URI.
- [Abfrage](/de/docs/Web/URI/Reference/Query)
  - : Der Abschnitt nach dem Pfad.
    Enthält nicht-hierarchische Daten zur Identifizierung einer Ressource innerhalb des Geltungsbereichs des Schemas und der benannten Autorität des URI zusammen mit Daten im Pfadkomponenten.
- [Fragment](/de/docs/Web/URI/Reference/Fragment)
  - : Ein optionaler Teil am Ende eines URI, der mit einem `#`-Zeichen beginnt.
    Es wird verwendet, um einen spezifischen Teil der Ressource zu identifizieren, wie etwa einen Abschnitt eines Dokuments oder eine Position in einem Video.

## Leitfäden

Die [URI-Leitfäden](/de/docs/Web/URI/Guides) helfen Ihnen dabei, mit URIs im Web zu arbeiten.

- [Auswahl zwischen www und nicht-www-URLs](/de/docs/Web/URI/Guides/Choosing_between_www_and_non-www_URLs)
  - : Anleitung dazu, wann Websites ein `www.`-Präfix in URLs verwenden sollten (`www.example.com` vs `example.com`).

## Spezifikationen

{{Specifications}}

## Siehe auch

- [Was ist eine URL?](/de/docs/Learn_web_development/Howto/Web_mechanics/What_is_a_URL)
