---
title: URI authority
short-title: Authority
slug: Web/URI/Reference/Authority
l10n:
  sourceCommit: 4d9320f9857fb80fef5f3fe78e3d09b06eb0ebbd
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
  - : Der _Host_ ist in der Regel der Domainname oder die IP-Adresse des Servers, der die Ressource hostet. Der Domainname wird mithilfe des {{Glossary("DNS", "Domain Name System")}} in eine IP-Adresse aufgelöst.
- `port` {{optional_inline}}
  - : Der _Port_ ist eine Nummer, die angibt, an welchem Port der Server Anfragen entgegen nimmt. Der Port ist optional und standardmäßig auf 80 für HTTP und 443 für HTTPS gesetzt. Andere Schemas können ihre eigenen Standardwerte definieren oder ihn verpflichtend machen.
- `user` {{optional_inline}}

  - : Der _Benutzer_ ist optional und wird für Authentifizierungszwecke verwendet. Er wird in Web-URIs nicht häufig genutzt.

    > [!WARNING]
    > Es wird nicht empfohlen, Benutzerinformationen direkt in HTTP-URLs anzugeben, da dadurch sensible Informationen offengelegt werden könnten. Verwenden Sie stattdessen andere Methoden wie HTTP-Authentifizierung oder Session-Cookies. Manchmal täuschen Phishing-Websites Benutzende, indem sie irreführende URLs anzeigen, bei denen der „Benutzer“-Teil wie ein Domainname aussieht. Dies wird als [Semantic URL Attack](https://en.wikipedia.org/wiki/Semantic_URL_attack) bezeichnet.

## Beispiele

- `https://developer.mozilla.org`
  - : Der Host ist `developer.mozilla.org`. Der Port ist nicht angegeben, wird aber auf 443 standardmäßig gesetzt, wenn auf `https:` zugegriffen wird.
- `http://localhost:8080`
  - : Der Host ist `localhost` und der Port ist `8080`. `localhost` ist ein spezieller Hostname, den der Browser auf die lokale Adresse `127.0.0.1` auflöst.
- `postgresql://postgres:admin123@db:5432`
  - : Der Host ist `db`, und der Port ist `5432`. Außerdem wird ein Benutzer `postgres` und dessen Passwort `admin123` angegeben. Dies kann verwendet werden, um eine Verbindung zu einer PostgreSQL-Datenbank herzustellen.
- `https://cnn.example.com&story=breaking_news@10.0.0.1`
  - : Eine irreführende URL, die so aussieht, als würde sie auf eine vertrauenswürdige Website verweisen. Der Hostname ist jedoch `10.0.0.1`, und der Teil `cnn.example.com&story=breaking_news` ist der „Benutzer“.

## Spezifikationen

{{Specifications}}

## Siehe auch

- [URIs](/de/docs/Web/URI)
- [Auswahl zwischen www und nicht-www URLs](/de/docs/Web/URI/Guides/Choosing_between_www_and_non-www_URLs)
