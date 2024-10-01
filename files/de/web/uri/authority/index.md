---
title: URI authority
slug: Web/URI/Authority
l10n:
  sourceCommit: b25d8774aa7bcc6a053e26cf804ad454f51e134b
---

{{QuickLinksWithSubpages("/de/docs/Web/URI")}}

Die **Authority** einer URI ist der Abschnitt, der nach dem [Scheme](/de/docs/Web/URI/Schemes) und vor dem Pfad kommt. Sie kann bis zu drei Teile enthalten: Benutzerinformationen, Host und Port.

## Syntax

```url
host
host:port
user@host
user@host:port
```

- host
  - : Der _host_ ist normalerweise der Domainname oder die IP-Adresse des Servers, der die Ressource hostet. Der Domainname wird unter Verwendung des {{Glossary("DNS", "Domain Name System")}} in eine IP-Adresse aufgelöst.
- port {{optional_inline}}
  - : Der _port_ ist eine Zahl, die den Port angibt, auf dem der Server auf Anfragen wartet. Er ist optional und ist standardmäßig 80 für HTTP und 443 für HTTPS. Andere Schemes können ihre eigenen Standardwerte definieren oder ihn verpflichtend machen.
- user {{optional_inline}}

  - : Der _user_ ist optional und wird für Authentifizierungszwecke verwendet. Er wird in Web-URIs nicht häufig verwendet.

    > [!WARNING]
    > Es wird nicht empfohlen, Benutzerinformationen direkt in HTTP-URLs bereitzustellen, da dies sensible Informationen preisgeben kann. Verwenden Sie stattdessen andere Methoden wie HTTP-Authentifizierung oder Sitzungscookies. Manchmal führen Phishing-Seiten Benutzer in die Irre, indem sie irreführende URLs anzeigen, deren "user"-Teil wie ein Domainname erscheint, bekannt als [semantic URL attack](https://en.wikipedia.org/wiki/Semantic_URL_attack).

## Beispiele

- `https://developer.mozilla.org`
  - : Der Host ist `developer.mozilla.org`. Der Port ist nicht angegeben, wird jedoch standardmäßig auf 443 gesetzt, wenn über `https:` zugegriffen wird.
- `http://localhost:8080`
  - : Der Host ist `localhost` und der Port ist `8080`. `localhost` ist ein spezieller Hostname, den der Browser in die lokale Adresse `127.0.0.1` auflöst.
- `postgresql://postgres:admin123@db:5432`
  - : Der Host ist `db`, und der Port ist `5432`. Es wird auch ein Benutzer `postgres` und sein Passwort `admin123` angegeben. Dies kann verwendet werden, um eine Verbindung zu einer PostgreSQL-Datenbank herzustellen.
- `https://cnn.example.com&story=breaking_news@10.0.0.1`
  - : Eine irreführende URL, die aussieht, als würde sie auf eine vertrauenswürdige Website verweisen. Der Hostname ist jedoch `10.0.0.1`, und der `cnn.example.com&story=breaking_news`-Teil ist der "user".

## Spezifikationen

{{Specifications}}

## Siehe auch

- [URIs](/de/docs/Web/URI)
- [Auswahl zwischen www und nicht-www URLs](/de/docs/Web/URI/Authority/Choosing_between_www_and_non-www_URLs)
