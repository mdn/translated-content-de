---
title: URI authority
short-title: Authority
slug: Web/URI/Reference/Authority
l10n:
  sourceCommit: d54f8c9ecfbafc35915330ac4e26a09d93d814e8
---

Die **Authority** einer URI ist der Abschnitt, der nach dem [Schema](/de/docs/Web/URI/Reference/Schemes) und vor dem Pfad kommt. Sie kann bis zu drei Teile enthalten: Benutzerinformationen, Host und Port.

## Syntax

```url
host
host:port
user@host
user@host:port
```

- `host`
  - : Der _Host_ ist normalerweise der Domainname oder die IP-Adresse des Servers, der die Ressource hostet. Der Domainname wird unter Verwendung des {{Glossary("DNS", "Domain Name Systems")}} in eine IP-Adresse aufgelöst.
- `port` {{optional_inline}}
  - : Der _Port_ ist eine Zahl, die den Port angibt, an dem der Server auf Anfragen wartet. Er ist optional und standardmäßig 80 für HTTP und 443 für HTTPS. Andere Schemas können ihre eigenen Standardwerte definieren oder es als obligatorisch festlegen.
- `user` {{optional_inline}}

  - : Der _Benutzer_ ist optional und wird für Authentifizierungszwecke verwendet. Er wird in Web-URIs nicht häufig verwendet.

    > [!WARNING]
    > Es wird nicht empfohlen, Benutzerinformationen direkt in HTTP-URLs anzugeben, da dies sensible Informationen preisgeben kann. Verwenden Sie stattdessen andere Methoden wie HTTP-Authentifizierung oder Session-Cookies. Manchmal täuschen Phishing-Websites Benutzer, indem sie irreführende URLs anzeigen, deren "Benutzer"-Teil wie ein Domainname erscheint, bekannt als [semantic URL attack](https://en.wikipedia.org/wiki/Semantic_URL_attack).

## Beispiele

- `https://developer.mozilla.org`
  - : Der Host ist `developer.mozilla.org`. Der Port ist nicht angegeben, wird jedoch auf 443 zurückgesetzt, wenn der Zugriff über `https:` erfolgt.
- `http://localhost:8080`
  - : Der Host ist `localhost` und der Port ist `8080`. `localhost` ist ein spezieller Hostname, den der Browser auf die lokale Adresse `127.0.0.1` auflöst.
- `postgresql://postgres:admin123@db:5432`
  - : Der Host ist `db`, und der Port ist `5432`. Außerdem wird ein Benutzer `postgres` und dessen Passwort `admin123` angegeben. Dies kann verwendet werden, um sich mit einer PostgreSQL-Datenbank zu verbinden.
- `https://cnn.example.com&story=breaking_news@10.0.0.1`
  - : Eine irreführende URL, die so aussieht, als würde sie auf eine vertrauenswürdige Website verweisen. Der Hostname ist jedoch `10.0.0.1`, und der Teil `cnn.example.com&story=breaking_news` ist der "Benutzer".

## Spezifikationen

{{Specifications}}

## Siehe auch

- [URIs](/de/docs/Web/URI)
- [Auswahl zwischen www und nicht-www URLs](/de/docs/Web/URI/Guides/Choosing_between_www_and_non-www_URLs)
