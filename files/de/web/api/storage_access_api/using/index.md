---
title: Verwendung der Storage Access API
slug: Web/API/Storage_Access_API/Using
l10n:
  sourceCommit: a84b606ffd77c40a7306be6c932a74ab9ce6ab96
---

{{DefaultAPISidebar("Storage Access API")}}

Die [Storage Access API](/de/docs/Web/API/Storage_Access_API) kann von eingebetteten, cross-site Dokumenten verwendet werden, um zu überprüfen, ob sie Zugang zu [Drittanbieter-Cookies](/de/docs/Web/Privacy/Guides/Third-party_cookies) und [unpartitioniertem Zustand](/de/docs/Web/Privacy/Guides/State_Partitioning#state_partitioning) haben, und gegebenenfalls den Zugang anzufordern. Wir werfen einen kurzen Blick auf ein gängiges Szenario für den Speicherzugriff.

> [!NOTE]
> Wenn wir im Kontext der Storage Access API über Drittanbieter-Cookies sprechen, meinen wir implizit [_unpartitionierte_](/de/docs/Web/API/Storage_Access_API#unpartitioned_versus_partitioned_cookies) Drittanbieter-Cookies.

## Nutzungshinweise

Die Storage Access API ist so konzipiert, dass eingebettete Inhalte den Zugriff auf Drittanbieter-Cookies und unpartitionierten Zustand anfordern können — die meisten modernen Browser blockieren solchen Zugriff standardmäßig zum Schutz der Privatsphäre der Nutzer. Da eingebettete Inhalte nicht wissen, wie sich ein Browser in dieser Hinsicht verhalten wird, ist es am besten, immer zu überprüfen, ob das eingebettete {{htmlelement("iframe")}} Speicherzugriff hat, bevor versucht wird, ein Cookie zu lesen oder zu schreiben. Dies gilt insbesondere für den Zugriff auf [`Document.cookie`](/de/docs/Web/API/Document/cookie), da Browser häufig ein leeres Cookie-Glas zurückgeben, wenn der Zugriff auf Drittanbieter-Cookies blockiert ist.

Im folgenden Beispiel zeigen wir, wie ein eingebettetes, cross-site {{htmlelement("iframe")}} Zugang zu Drittanbieter-Cookies und unpartitioniertem Zustand unter einer Browser-Speicherzugriffspolicy erlangen kann, die ansonsten den Zugriff darauf blockieren würde.

## Erlauben eines sandboxed `<iframe>` zur Nutzung der API

Zunächst einmal, wenn das `<iframe>` sandboxed ist, muss die einbettende Website das `allow-storage-access-by-user-activation` [sandbox-Token](/de/docs/Web/HTML/Reference/Elements/iframe#sandbox) hinzufügen, um erfolgreich Anfragen an die Storage Access API zu ermöglichen, zusammen mit `allow-scripts` und `allow-same-origin`, um ein Skript zum Aufrufen und Ausführen der API in einem Ursprung zu ermöglichen, der Cookies und Zustand haben kann:

```html
<iframe
  sandbox="allow-storage-access-by-user-activation
                 allow-scripts
                 allow-same-origin">
  …
</iframe>
```

## Überprüfen und Anfordern von Speicherzugriff

Nun zum im eingebetteten Dokument ausgeführten Code. In diesem Code:

1. Zuerst verwenden wir Feature-Detection (`if (document.hasStorageAccess) {}`), um zu überprüfen, ob die API unterstützt wird. Falls nicht, führen wir unseren Code aus, der trotzdem auf Cookies zugreift, in der Hoffnung, dass er funktioniert. Er sollte defensiv codiert sein, um mit solchen Eventualitäten umgehen zu können.
2. Wenn die API unterstützt wird, rufen wir `document.hasStorageAccess()` auf.
3. Wenn dieser Aufruf `true` zurückgibt, bedeutet das, dass dieses {{htmlelement("iframe")}} bereits Zugriff erlangt hat, und wir können unseren Code zum Zugriff auf Cookies und Zustand sofort ausführen.
4. Wenn dieser Aufruf `false` zurückgibt, rufen wir [`Permissions.query()`](/de/docs/Web/API/Permissions/query) auf, um zu prüfen, ob die Erlaubnis zum Zugriff auf Drittanbieter-Cookies und unpartitionierten Zustand bereits gewährt wurde (d.h. zu einem anderen gleiche Domain-Einbettung). Wir umschließen diesen gesamten Abschnitt in einem [`try...catch`](/de/docs/Web/JavaScript/Reference/Statements/try...catch) Block, weil [einige Browser die Erlaubnis `"storage-access"` nicht unterstützen](/de/docs/Web/API/Storage_Access_API#api.permissions.permission_storage-access), was dazu führen kann, dass der `query()` Aufruf ein Ausnahme auslöst. Wenn eine Ausnahme ausgelöst wird, melden wir das an die Konsole und versuchen, den Cookie-Code dennoch auszuführen.
5. Wenn der Erlaubnisstatus `"granted"` ist, rufen wir sofort `document.requestStorageAccess()` auf. Dieser Aufruf wird automatisch aufgelöst, was dem Nutzer Zeit spart, dann können wir unseren Code ausführen, der auf Cookies und Zustand zugreift.
6. Wenn der Erlaubnisstatus `"prompt"` ist, rufen wir `document.requestStorageAccess()` nach einer Benutzerinteraktion auf. Dieser Aufruf kann eine Aufforderung an den Nutzer auslösen. Wenn dieser Aufruf aufgelöst wird, können wir unseren Code zum Zugriff auf Cookies und Zustand ausführen.
7. Wenn der Erlaubnisstatus `"denied"` ist, hat der Nutzer unsere Anfragen zum Zugriff auf Drittanbieter-Cookies oder unpartitionierten Zustand abgelehnt, und unser Code kann sie nicht verwenden.

```js
function doThingsWithCookies() {
  document.cookie = "foo=bar"; // set a cookie
}

function doThingsWithLocalStorage(handle) {
  handle.localStorage.setItem("foo", "bar"); // set a local storage key
}

async function handleCookieAccess() {
  if (!document.hasStorageAccess) {
    // This browser doesn't support the Storage Access API
    // so let's just hope we have access!
    doThingsWithCookies();
  } else {
    const hasAccess = await document.hasStorageAccess();
    if (hasAccess) {
      // We have access to third-party cookies, so let's go
      doThingsWithCookies();
      // If we want to modify unpartitioned state, we need to request a handle.
      const handle = await document.requestStorageAccess({
        localStorage: true,
      });
      doThingsWithLocalStorage(handle);
    } else {
      // Check whether third-party cookie access has been granted
      // to another same-site embed
      try {
        const permission = await navigator.permissions.query({
          name: "storage-access",
        });

        if (permission.state === "granted") {
          // If so, you can just call requestStorageAccess() without a user interaction,
          // and it will resolve automatically.
          const handle = await document.requestStorageAccess({
            cookies: true,
            localStorage: true,
          });
          doThingsWithLocalStorage(handle);
          doThingsWithCookies();
        } else if (permission.state === "prompt") {
          // Need to call requestStorageAccess() after a user interaction
          btn.addEventListener("click", async () => {
            try {
              const handle = await document.requestStorageAccess({
                cookies: true,
                localStorage: true,
              });
              doThingsWithLocalStorage(handle);
              doThingsWithCookies();
            } catch (err) {
              // If there is an error obtaining storage access.
              console.error(`Error obtaining storage access: ${err}.
                            Please sign in.`);
            }
          });
        } else if (permission.state === "denied") {
          // User has denied third-party cookie access, so we'll
          // need to do something else
        }
      } catch (error) {
        console.log(`Could not access permission state. Error: ${error}`);
        doThingsWithCookies(); // Again, we'll have to hope we have access!
      }
    }
  }
}
```

> [!NOTE] > `requestStorageAccess()` Anfragen werden automatisch abgelehnt, es sei denn, der eingebettete Inhalt verarbeitet gerade eine Benutzeraktion wie ein Tippen oder Klicken ({{Glossary("transient_activation", "transiente Aktivierung")}}), oder wenn die Erlaubnis bereits zuvor gewährt wurde. Wenn die Erlaubnis nicht vorher gewährt wurde, müssen `requestStorageAccess()` Anfragen innerhalb eines benutzeraktionsbasierten Ereignishandlers ausgeführt werden, wie oben gezeigt.

### Verwandte Website-Sets

Das nur für Chrome verfügbare Feature [verwandte Website-Sets](/de/docs/Web/API/Storage_Access_API/Related_website_sets) kann als progressive Verbesserungsmechanismus betrachtet werden, der zusammen mit der Storage Access API funktioniert — unterstützende Browser gewähren standardmäßig den Zugriff auf Drittanbieter-Cookies und unpartitionierten Zustand zwischen Websites im gleichen Set. Dies bedeutet, dass der übliche Workflow zum Erlauben von Benutzeraufforderungen, der oben beschrieben wird, nicht durchlaufen werden muss, was eine benutzerfreundlichere Erfahrung für Nutzer von Websites im Set bedeutet.

## Anfordern von Speicherzugriff von der oberen Website im Auftrag von eingebetteten Ressourcen

Die oben genannten Funktionen der Storage Access API ermöglichen es einem eingebetteten Dokument, selbst den Zugriff auf Drittanbieter-Cookies zu beantragen. Es gibt eine zusätzliche experimentelle Methode, [`Document.requestStorageAccessFor()`](/de/docs/Web/API/Document/requestStorageAccessFor), einen vorgeschlagenen Erweiterung der Storage Access API, die es oberen Websites ermöglicht, Speicherzugriff im Auftrag spezifischer verwandter Ursprünge zu beantragen.

Die Methode `requestStorageAccessFor()` adressiert Herausforderungen bei der Einführung der Storage Access API auf oberen Websites, die cross-site Bilder oder Skripte verwenden, die Cookies benötigen. Es kann den Zugriff auf Drittanbieter-Cookies für cross-site Ressourcen direkt in die oberste Website eingebettet aktivieren, die nicht in der Lage sind, ihren eigenen Speicherzugriff zu beantragen, z.B. über {{htmlelement("img")}} oder {{htmlelement("script")}}-Elemente.

Damit `requestStorageAccessFor()` funktioniert, müssen sowohl die aufrufende oberste Seite als auch die eingebettete Ressource, für die sie Speicherzugriff beantragt, Teil desselben [verwandten Website-Sets](/de/docs/Web/API/Storage_Access_API/Related_website_sets) sein.

Typische Verwendung von `requestStorageAccessFor()` sieht so aus (dieses Mal in regulärem Promise-Stil statt async/await):

```js
navigator.permissions
  .query({
    name: "top-level-storage-access",
    requestedOrigin: "https://example.com",
  })
  .then((permission) => {
    if (permission.state === "granted") {
      // Permission has already been granted
      // No need to call requestStorageAccessFor() again, just start using cookies
      doThingsWithCookies();
    } else if (permission.state === "prompt") {
      // Need to call requestStorageAccessFor() after a user interaction
      btn.addEventListener("click", () => {
        // Request storage access
        rSAFor();
      });
    } else if (permission.state === "denied") {
      // User has denied third-party cookie access, so we'll
      // need to do something else
    }
  });

function rSAFor() {
  if ("requestStorageAccessFor" in document) {
    document.requestStorageAccessFor("https://example.com").then(
      (res) => {
        doThingsWithCookies();
      },
      (err) => {
        // Handle errors
      },
    );
  }
}
```

> [!NOTE]
> Anders als bei `requestStorageAccess()` überprüft Chrome bei `requestStorageAccessFor()` nicht, ob innerhalb der letzten 30 Tage eine Interaktion in einem obersten Dokument stattgefunden hat, weil der Nutzer bereits auf der Seite ist. Siehe [Browser-spezifische Variationen > Chrome](/de/docs/Web/API/Storage_Access_API#chrome) für weitere Details zu diesem Verhalten.

Beim Abfragen des Erlaubnisstatus für Speicherzugriffsanfragen im Namen eines anderen Ursprungs wird für die Erlaubnis ein anderer Name verwendet als für den Rest der Storage Access API: `"top-level-storage-access"` statt `"storage-access"`. Im obigen Code verwenden wir den folgenden Aufruf:

```js
navigator.permissions.query({
  name: "top-level-storage-access",
  requestedOrigin: "https://example.com",
});
```

um herauszufinden, ob dem Ursprung zuvor die Erlaubnis erteilt wurde oder ob der Cookie-Zugriff noch angefordert werden muss.

- Wenn der Erlaubnisstatus `"granted"` ist, können wir anfangen, Cookies zu verwenden; `requestStorageAccessFor()` wurde bereits aufgerufen, also ist es nicht nötig, es erneut aufzurufen.
- Wenn der Erlaubnisstatus `"prompt"` ist, müssen wir `document.requestStorageAccessFor("https://example.com")` innerhalb einer Benutzeraktion aufrufen, wie zum Beispiel einem Klick auf einen Button.

Nachdem die Erlaubnis `"top-level-storage-access"` erteilt wurde, werden cross-site Anfragen Cookies enthalten, wenn sie [CORS](/de/docs/Web/HTTP/Guides/CORS) / [`crossorigin`](/de/docs/Web/HTML/Reference/Attributes/crossorigin) beinhalten, so dass Websites möglicherweise warten möchten, bevor sie eine Anfrage auslösen. Solche Anfragen müssen die Option [`credentials: "include"`](/de/docs/Web/API/RequestInit#credentials) verwenden und Ressourcen müssen das Attribut `crossorigin="use-credentials"` enthalten.

Zum Beispiel:

```js
function checkCookie() {
  fetch("https://example.com/getcookies.json", {
    method: "GET",
    credentials: "include",
  })
    .then((response) => response.json())
    .then((json) => {
      // Do something
    });
}
```
