---
title: URI-Authority
slug: Web/URI/Authority
l10n:
  sourceCommit: b25d8774aa7bcc6a053e26cf804ad454f51e134b
---

{{QuickLinksWithSubpages("/de/docs/Web/URI")}}

Die **Authority** einer URI ist der Abschnitt, der nach dem [Scheme](/de/docs/Web/URI/Schemes) und vor dem Pfad erscheint. Sie kann bis zu drei Teile haben: Benutzerdaten, Host und Port.

## Syntax

```url
host
host:port
user@host
user@host:port
```

- host
  - : Der _Host_ ist normalerweise der Domainname oder die IP-Adresse des Servers, der die Ressource hostet. Der Domainname wird mithilfe des {{glossary("DNS", "Domain Name System")}} in eine IP-Adresse aufgelöst.
- port {{optional_inline}}
  - : Der _Port_ ist eine Zahl, die den Port angibt, an dem der Server auf Anfragen lauscht. Er ist optional und standardmäßig 80 für HTTP und 443 für HTTPS. Andere Schemes können ihre eigenen Standardwerte definieren oder ihn als obligatorisch festlegen.
- user {{optional_inline}}

  - : Der _Benutzer_ ist optional und wird zu Authentifizierungszwecken verwendet. Er wird in Web-URIs nicht häufig verwendet.

    > [!WARNING]
    > Direktes Bereitstellen von Benutzerdaten in HTTP-URLs wird nicht empfohlen, da dadurch sensible Informationen offengelegt werden können. Verwenden Sie stattdessen andere Methoden wie HTTP-Authentifizierung oder Session-Cookies. Manchmal täuschen Phishing-Webseiten Benutzer, indem sie irreführende URLs mit einem "Benutzer"-Teil anzeigen, der als Domainname erscheint, bekannt als [Semantic URL Attack](https://en.wikipedia.org/wiki/Semantic_URL_attack).

## Beispiele

- `https://developer.mozilla.org`
  - : Der Host ist `developer.mozilla.org`. Der Port ist nicht angegeben, wird aber auf 443 festgelegt, wenn er über `https:` aufgerufen wird.
- `http://localhost:8080`
  - : Der Host ist `localhost` und der Port ist `8080`. `localhost` ist ein spezieller Hostname, den der Browser in die lokale Adresse `127.0.0.1` auflöst.
- `postgresql://postgres:admin123@db:5432`
  - : Der Host ist `db` und der Port ist `5432`. Es wird auch ein Benutzer `postgres` und sein Passwort `admin123` angegeben. Dies kann zum Verbinden mit einer PostgreSQL-Datenbank verwendet werden.
- `https://cnn.example.com&story=breaking_news@10.0.0.1`
  - : Eine irreführende URL, die erscheint, als zeige sie auf eine vertrauenswürdige Webseite. Der Hostname ist jedoch `10.0.0.1` und der Teil `cnn.example.com&story=breaking_news` ist der "Benutzer".

## Spezifikationen

{{Specifications}}

## Siehe auch

- [URIs](/de/docs/Web/URI)
- [Auswahl zwischen www und nicht-www URLs](/de/docs/Web/URI/Authority/Choosing_between_www_and_non-www_URLs)
