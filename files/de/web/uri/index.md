---
title: URIs
slug: Web/URI
l10n:
  sourceCommit: 87ca9db1ebe56eb20c1f20b91fca43955d8f0e26
---

**Uniform Resource Identifiers (URI)** werden verwendet, um "Ressourcen" im Web zu identifizieren. URIs werden häufig als Ziele von [HTTP](/de/docs/Web/HTTP)-Anfragen verwendet, wobei der URI einen Standort für eine Ressource darstellt, wie z. B. ein Dokument, ein Foto oder Binärdaten. Der gebräuchlichste Typ eines URI ist ein Uniform Resource Locator ({{Glossary("URL", "URL")}}), bekannt als die _Webadresse_.

URIs können verwendet werden, um Verhaltensweisen auszulösen, die über das Abrufen einer Ressource hinausgehen, einschließlich des Öffnens eines E-Mail-Clients, des Versendens von Textnachrichten oder des Ausführens von JavaScript, wenn sie an anderen Stellen wie im [`href`](/de/docs/Web/HTML/Reference/Elements/a#href) eines HTML-`<a>`-Links verwendet werden.

## Referenz

Die [URI-Referenz](/de/docs/Web/URI/Reference) bietet Details zu den Komponenten, aus denen ein URI besteht.

- [Schemes](/de/docs/Web/URI/Reference/Schemes)
  - : Der erste Teil des URI, vor dem `:` Zeichen, das das Protokoll angibt, das der Browser verwenden muss, um die Ressource abzurufen.
- [Authority](/de/docs/Web/URI/Reference/Authority)
  - : Der Abschnitt, der nach dem Schema und vor dem Pfad kommt.
    Er kann bis zu drei Teile haben: `user`-Informationen, `host` und `port`.
- [Path](/de/docs/Web/URI/Reference/Path)
  - : Der Abschnitt nach der Autorität.
    Enthält Daten, die normalerweise in hierarchischer Form organisiert sind, um eine Ressource im Rahmen des Scheme und der Autorität des URI zu identifizieren.
- [Query](/de/docs/Web/URI/Reference/Query)
  - : Der Abschnitt nach dem Pfad.
    Enthält nicht-hierarchische Daten zur Identifizierung einer Ressource im Rahmen des Scheme des URI und der Benennungsautorität zusammen mit den Daten im Pfadkomponenten.
- [Fragment](/de/docs/Web/URI/Reference/Fragment)
  - : Ein optionaler Teil am Ende eines URI, der mit einem `#` Zeichen beginnt.
    Er wird verwendet, um einen spezifischen Teil der Ressource zu identifizieren, wie einen Abschnitt eines Dokuments oder eine Position in einem Video.

## Leitfäden

Die [URI-Leitfäden](/de/docs/Web/URI/Guides) helfen Ihnen beim Umgang mit URIs im Web.

- [Die Wahl zwischen www und nicht-www URLs](/de/docs/Web/URI/Guides/Choosing_between_www_and_non-www_URLs)
  - : Anleitung, wann Webseiten ein `www.` Präfix in URLs verwenden sollten (`www.example.com` vs `example.com`).

## Spezifikationen

{{Specifications}}

## Siehe auch

- [Was ist eine URL?](/de/docs/Learn_web_development/Howto/Web_mechanics/What_is_a_URL)
