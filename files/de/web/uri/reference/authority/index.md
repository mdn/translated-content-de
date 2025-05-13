---
title: URI Authority
short-title: Authority
slug: Web/URI/Reference/Authority
l10n:
  sourceCommit: be9ba40fbef7f96beae73e5dd6d48a3ca875826f
---

Die **Authority** einer URI ist der Abschnitt, der nach dem [Scheme](/de/docs/Web/URI/Reference/Schemes) und vor dem Pfad kommt. Sie kann bis zu drei Teile haben: Benutzerinformationen, Host und Port.

## Syntax

```url
host
host:port
user@host
user@host:port
```

- `host`
  - : Der _Host_ ist normalerweise der Domainname oder die IP-Adresse des Servers, der die Ressource hostet. Der Domainname wird über das {{Glossary("DNS", "Domain Name System")}} in eine IP-Adresse aufgelöst.
- `port` {{optional_inline}}
  - : Der _Port_ ist eine Nummer, die angibt, auf welchem Port der Server auf Anfragen hört. Er ist optional und standardmäßig 80 für HTTP und 443 für HTTPS. Andere Schemes können ihre eigenen Standards definieren oder ihn verpflichtend machen.
- `user` {{optional_inline}}

  - : Der _Benutzer_ ist optional und wird für Authentifizierungszwecke verwendet. Er wird in Web-URIs nicht häufig genutzt.

    > [!WARNING]
    > Es wird nicht empfohlen, Benutzerinformationen direkt in HTTP-URLs anzugeben, da dies sensible Informationen preisgeben kann. Verwenden Sie stattdessen andere Methoden wie HTTP-Authentifizierung oder Session-Cookies. Manchmal führen Phishing-Websites Benutzer in die Irre, indem sie irreführende URLs anzeigen, deren "Benutzer"-Teil so erscheint, als wäre es ein Domainname, bekannt als [semantic URL attack](https://en.wikipedia.org/wiki/Semantic_URL_attack).

## Beschreibung

Betrachten Sie die folgende URL:

```url
http://www.example.com:80/path/to/myfile.html?key1=value1&key2=value2#SomewhereInTheDocument
```

Die Authority in diesem Fall ist `www.example.com:80`, bestehend aus dem Hostnamen (genauer gesagt einem Domainnamen) und einem Port.

![Domain Name](mdn-url-domain@x2.png)

`www.example.com` ist der _Hostname_ der URI, der angibt, welcher Webserver angefordert wird. Hier verwenden wir einen Domainnamen, aber es ist auch möglich, eine {{Glossary("IP_address", "IP-Adresse")}} des Hosts zu verwenden. Da IP-Adressen weniger praktisch und schwerer zu merken sind, ist es üblicher, einen Domainnamen zu verwenden, es sei denn, der Server hat keinen registrierten.

![Port](mdn-url-port@x2.png)

`:80` ist der _Port_ der URL, der das technische "Tor" angibt, das zum Zugriff auf die Ressourcen auf dem Webserver verwendet wird. Er wird normalerweise weggelassen, wenn der Webserver die Standardports des HTTP-Protokolls (80 für HTTP und 443 für HTTPS) verwendet, um Zugriff auf seine Ressourcen zu gewähren. Andernfalls ist er erforderlich.

## Beispiele

- `https://developer.mozilla.org`
  - : Der Host ist `developer.mozilla.org`. Der Port ist nicht angegeben, wird aber standardmäßig auf 443 gesetzt, wenn auf `https:` zugegriffen wird.
- `http://localhost:8080`
  - : Der Host ist `localhost` und der Port ist `8080`. `localhost` ist ein spezieller Hostname, den der Browser zur lokalen Adresse `127.0.0.1` auflöst.
- `postgresql://postgres:admin123@db:5432`
  - : Der Host ist `db`, und der Port ist `5432`. Es wird auch ein Benutzer `postgres` und dessen Passwort `admin123` angegeben. Dies kann verwendet werden, um eine Verbindung zu einer PostgreSQL-Datenbank herzustellen.
- `https://cnn.example.com&story=breaking_news@10.0.0.1`
  - : Eine irreführende URL, die aussieht, als würde sie auf eine vertrauenswürdige Website verweisen. Der Hostname ist jedoch `10.0.0.1`, und der Teil `cnn.example.com&story=breaking_news` ist der "Benutzer".

## Spezifikationen

{{Specifications}}

## Siehe auch

- [URIs](/de/docs/Web/URI)
- [Leitfaden zur Wahl zwischen www und non-www URLs](/de/docs/Web/URI/Guides/Choosing_between_www_and_non-www_URLs)
