---
title: URI Authority
slug: Web/URI/Authority
l10n:
  sourceCommit: b25d8774aa7bcc6a053e26cf804ad454f51e134b
---

{{QuickLinksWithSubpages("/de/docs/Web/URI")}}

Die **Authority** einer URI ist der Abschnitt, der nach dem [Schema](/de/docs/Web/URI/Schemes) und vor dem Pfad kommt. Sie kann bis zu drei Teile haben: Benutzerinformationen, Host und Port.

## Syntax

```url
host
host:port
user@host
user@host:port
```

- host
  - : Der _Host_ ist normalerweise der Domainname oder die IP-Adresse des Servers, der die Ressource hostet. Der Domainname wird über das [Domain Name System](/de/docs/Glossary/DNS) in eine IP-Adresse aufgelöst.
- port {{optional_inline}}
  - : Der _Port_ ist eine Nummer, die den Port angibt, an dem der Server auf Anfragen wartet. Er ist optional und standardmäßig auf 80 für HTTP und 443 für HTTPS eingestellt. Andere Schemata können ihre eigenen Standardwerte definieren oder ihn verpflichtend machen.
- user {{optional_inline}}

  - : Der _Benutzer_ ist optional und wird für Authentifizierungszwecke verwendet. Er wird in Web-URIs nicht häufig verwendet.

    > [!WARNING]
    > Es wird nicht empfohlen, Benutzerinformationen direkt in HTTP-URLs anzugeben, da dies sensible Informationen preisgeben kann. Verwenden Sie stattdessen andere Methoden wie HTTP-Authentifizierung oder Sitzungs-Cookies. Manchmal täuschen Phishing-Seiten Benutzer, indem sie irreführende URLs anzeigen, deren "Benutzer"-Teil erscheint, als ob es sich um einen Domainnamen handelt, bekannt als [semantic URL attack](https://en.wikipedia.org/wiki/Semantic_URL_attack).

## Beispiele

- `https://developer.mozilla.org`
  - : Der Host ist `developer.mozilla.org`. Der Port ist nicht angegeben, wird aber standardmäßig auf 443 gesetzt, wenn über `https:` zugegriffen wird.
- `http://localhost:8080`
  - : Der Host ist `localhost` und der Port ist `8080`. `localhost` ist ein spezieller Hostname, den der Browser in die lokale Adresse `127.0.0.1` auflöst.
- `postgresql://postgres:admin123@db:5432`
  - : Der Host ist `db`, und der Port ist `5432`. Es wird auch ein Benutzer `postgres` und sein Passwort `admin123` angegeben. Dies kann verwendet werden, um eine Verbindung zu einer PostgreSQL-Datenbank herzustellen.
- `https://cnn.example.com&story=breaking_news@10.0.0.1`
  - : Eine irreführende URL, die so aussieht, als würde sie auf eine vertrauenswürdige Website verweisen. Der Hostname ist jedoch `10.0.0.1`, und der Teil `cnn.example.com&story=breaking_news` ist der "Benutzer".

## Spezifikationen

{{Specifications}}

## Siehe auch

- [URIs](/de/docs/Web/URI)
- [Wahl zwischen www und non-www URLs](/de/docs/Web/URI/Authority/Choosing_between_www_and_non-www_URLs)
