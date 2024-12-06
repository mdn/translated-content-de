---
title: URI-Authority
slug: Web/URI/Authority
l10n:
  sourceCommit: 04e4faf5cbd0307b3b1e122c436110f1d197193a
---

{{QuickLinksWithSubpages("/de/docs/Web/URI")}}

Die **Authority** einer URI ist der Abschnitt, der nach dem [Scheme](/de/docs/Web/URI/Schemes) und vor dem Pfad kommt. Sie kann bis zu drei Teile umfassen: Benutzerinformationen, Host und Port.

## Syntax

```url
host
host:port
user@host
user@host:port
```

- host
  - : Der _Host_ ist in der Regel der Domainname oder die IP-Adresse des Servers, der die Ressource hostet. Der Domainname wird mithilfe des {{Glossary("DNS", "Domain Name System")}} in eine IP-Adresse aufgelöst.
- port {{optional_inline}}
  - : Der _Port_ ist eine Zahl, die den Port angibt, auf dem der Server auf Anfragen wartet. Er ist optional und standardmäßig 80 für HTTP und 443 für HTTPS. Andere Schemes können eigene Standardwerte definieren oder ihn verpflichtend machen.
- user {{optional_inline}}

  - : Der _Benutzer_ ist optional und wird zu Authentifizierungszwecken verwendet. In Web-URIs wird er selten verwendet.

    > [!WARNING]
    > Die direkte Angabe von Benutzerinformationen in HTTP-URLs wird nicht empfohlen, da sie sensible Informationen preisgeben kann. Verwenden Sie stattdessen andere Methoden wie HTTP-Authentifizierung oder Session-Cookies. Manchmal täuschen Phishing-Sites Benutzer, indem sie irreführende URLs anzeigen, bei denen der "Benutzer"-Teil als Domainname erscheint, bekannt als [semantischer URL-Angriff](https://en.wikipedia.org/wiki/Semantic_URL_attack).

## Beispiele

- `https://developer.mozilla.org`
  - : Der Host ist `developer.mozilla.org`. Der Port ist nicht angegeben, wird aber standardmäßig auf 443 gesetzt, wenn er über `https:` aufgerufen wird.
- `http://localhost:8080`
  - : Der Host ist `localhost` und der Port ist `8080`. `localhost` ist ein spezieller Hostname, den der Browser auf die lokale Adresse `127.0.0.1` auflöst.
- `postgresql://postgres:admin123@db:5432`
  - : Der Host ist `db`, und der Port ist `5432`. Es wird auch ein Benutzer `postgres` und sein Passwort `admin123` angegeben. Dies kann verwendet werden, um sich mit einer PostgreSQL-Datenbank zu verbinden.
- `https://cnn.example.com&story=breaking_news@10.0.0.1`
  - : Eine irreführende URL, die aussieht, als würde sie auf eine vertrauenswürdige Website verweisen. Der Hostname ist jedoch `10.0.0.1`, und der Teil `cnn.example.com&story=breaking_news` ist der "Benutzer".

## Spezifikationen

{{Specifications}}

## Siehe auch

- [URIs](/de/docs/Web/URI)
- [Auswahl zwischen www und nicht-www URLs](/de/docs/Web/URI/Authority/Choosing_between_www_and_non-www_URLs)
